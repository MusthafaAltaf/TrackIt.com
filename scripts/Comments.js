"usestrict"
var posts = [];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

let selectedProjectIndex = window.localStorage.getItem('lecturerProjectIndex');
let dataProject = window.localStorage.getItem('lecturerProjectData');
let dataProjectUnstringify = JSON.parse(dataProject);
let selectedProject = dataProjectUnstringify._projects[selectedProjectIndex];
let tasksInProject = selectedProject._tasks._tasks;

function post(index)
{
  let d = new Date();
  let minutes = d.getMinutes();
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  let timeStamp = months[d.getMonth()]+" "+d.getDate()+ ", "+d.getHours()+":"+ minutes;
  let currentPost;
  let user = window.localStorage.getItem('UserName');
  let commentRef = document.getElementById("typeComment"+index.toString());
  let commentAreaRef = document.getElementById("commentArea"+index.toString());

  if(commentRef.value == ""){
    alert("Cannot post empty comment");
  }
  else{
    // TODO
    // This is maybe for another page so we can print all comments? it working in my mind
    currentPost = [commentRef.value ,timeStamp, user, index];
    posts.push(currentPost);
    commentRef.value = "";
  }
  let i;

  commentAreaRef.innerHTML = posts[posts.length-1][0] + "<br>" + commentAreaRef.innerHTML;
  commentAreaRef.innerHTML = "<br>" + user + " - " + posts[posts.length-1][1] + "<br>" + commentAreaRef.innerHTML;

  let selectedTask = tasksInProject[index]._comments;
  selectedTask.push(posts[posts.length-1]);
  localStorage.setItem("lecturerProjectData", JSON.stringify(dataProjectUnstringify));
}

function clearCommentInput(index){
  var typeC = document.getElementById("typeComment"+index.toString());
  typeC.value = "";
}

function openComment(index){
  var popup = document.getElementById("popupComment"+index.toString());
  var btnName = document.getElementById("showCommentBtn"+index.toString());
  if (popup.style.display == "block"){
    popup.style.display = "none";
    btnName.innerHTML = "Show Comment Section";
  }
  else{
    let commentAreaRef = document.getElementById("commentArea"+index.toString());
    commentAreaRef.innerHTML = "";
    lstOfComments = tasksInProject[index]._comments;
    for (let i = 0; i < lstOfComments.length; i++){
      commentAreaRef.innerHTML = lstOfComments[i][0] + "<br>" + commentAreaRef.innerHTML;
      commentAreaRef.innerHTML = "<br>" + lstOfComments[i][2] + " - " + lstOfComments[i][1] + "<br>" + commentAreaRef.innerHTML;
    }
    popup.style.display = "block";
    btnName.innerHTML = "Close Comment Section";
  }
}
