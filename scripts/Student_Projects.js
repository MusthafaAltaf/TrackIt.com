// Display project cards
function displayProjects(projects)
{
  let projectCardsRef = document.getElementById("projectCards");
  let output = "";
  for (let i = 0; i < projects.projects.length; i++)
  {
    projectMembers = [];
    for (let member in projects.projects[i].members)
    {
      projectMembers.push(projects.projects[i].members[member].name)
    }

    output += `<div class="mdl-cell mdl-cell--4-col">
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand" style = "background: #${projects.projects[i].color}">
    <h2 class="mdl-card__title-text">${projects.getProject(i).name}</h2>
    </div>
    <div class="mdl-card__supporting-text">${projects.getProject(i).description} <br> Members: ${projectMembers}</div>
    <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick = "viewProject(${projects.getProject(i).id})">
    View Project
    </a>
    </div>
    </div>
    </div>`
  }

  projectCardsRef.innerHTML = output;
}

studentID = getDataLocalStorage(STUDENT_SIGNED_IN_KEY);

if(checkIfDataExistsLocalStorage(LECTURER_PROJECT_DATA_KEY))
{
  projectsRetrieved =  getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
  projects.fromData(projectsRetrieved);

  studentProjects = new ProjectList();

  for (let i = 0; i < projects.projects.length; i++)
  {
    projectMembers = [];
    for (let j in projects.getProject(i).members)
    {
      console.log(j)
      if (studentID == projects.getProject(i).members[j].id)
      {
        studentProjects.addStudentProject(projects.getProject(i));
      }
    }
  }

  displayProjects(studentProjects);
}

function viewProject(id)
{
  let index = 0;
  projectsRetrieved = getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
  projects.fromData(projectsRetrieved);
  for (let i = 0; i < projects.projects.length; i++)
  {
    if (projects.getProject(i).id == id)
    {
      index = i;
    }
  }

  tasks = projects.getProject(index).tasks
  updateLocalStorage(TASKS_DATA_KEY, tasks)
  updateLocalStorage(LECTURER_PROJECT_INDEX_KEY, index);
  window.location = "Student_View_Project.html";
}
