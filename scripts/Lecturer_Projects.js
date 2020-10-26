// Main
if (checkIfDataExistsLocalStorage(LECTURER_PROJECT_DATA_KEY))
{
  projectsRetrieved =  getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
  projects.fromData(projectsRetrieved);
  displayProjects(projects);
}

let allStudents = [];
let membersSelection = "";
if(checkIfDataExistsLocalStorage(STUDENTS_KEY))
{
  allStudents = getDataLocalStorage(STUDENTS_KEY);
  let projectMembersRef = document.getElementById("projectMembers");
  let options = ""
  for (let i in allStudents)
  {
    options += `<option value=${allStudents[i].id}>${allStudents[i].name} (${allStudents[i].id}) </option>`
  }

  projectMembersRef.innerHTML = options

  membersSelection = new SlimSelect({
    select: '#projectMembers'
  })
}


// ----------------------- Functions --------------------------------------
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

    // Card Title
    output += `<div class="mdl-cell mdl-cell--4-col">
    <div class="demo-card-square mdl-card mdl-shadow--2dp" >
    <div style = " background: #${projects.projects[i].color}; padding:5px;">`

    // Edit button
    output += `<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored" style="margin-top: 5px; left: 66%; color: #3b3b3b; background-color:#ebebeb;" onclick = "editProject(${i})" >
    <i class="material-icons">edit</i>
    </button>`

    // Delete button
    output += `<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored" style="margin-top: 5px; left: 65%; color: #3b3b3b; background-color:white;" onclick = "deleteProject(${i})">
    <i class="material-icons">delete</i>
    </button>
    </div>`

    output += `<div class="mdl-card__title mdl-card--expand" style = "background: #${projects.projects[i].color}">
    <h2 class="mdl-card__title-text">${projects.projects[i].name}</h2>
    </div>`

    // Description and members
    output += `<div class="mdl-card__supporting-text">${projects.projects[i].description} <br> Members: ${projectMembers}</div>`

    // Opening a project
    output += `<div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick = "viewProject(${i})">
    View Project
    </a>
    </div>
    </div>
    </div>`

  }

  projectCardsRef.innerHTML = output;
}

// Function to add a new project
function addNewProject(projectName, projectDescription, members)
{
  let projectNameRef = document.getElementById("projectName")
  let projectDescriptionRef = document.getElementById("projectDescription")
  if(projectNameRef.value.trim() == "")
  {
    alert("Please enter a project name")
  }
  else
  {
    projectName = projectNameRef.value
    projectDescription = projectDescriptionRef.value
    // Remember to change this part
    members = []
    let projectMemberIDs = membersSelection.selected()
    for (let i in projectMemberIDs)
    {
      for (let j in allStudents)
      {
        if(allStudents[j].id == projectMemberIDs[i])
        {
          members.push(allStudents[j])
        }
      }
    }
    // ------------------------------------
    projects.addProject(projectName, projectDescription, members);
    updateLocalStorage(LECTURER_PROJECT_DATA_KEY, projects);
    updateLocalStorage(ID_CONTROLLER_KEY, projects.idController);
    displayProjects(projects)
  }
}

// function to delete a project
function deleteProject(index)
{
  confirmDelete = confirm("Are you sure you want to delete this project? Once deleted, the project cannot be recovered");
  if(confirmDelete)
  {
    project = projects.getProject(index);
    projects.removeProject(project.id);
    updateLocalStorage(LECTURER_PROJECT_DATA_KEY, projects);
    alert("Project deleted");
    window.location = "Lecturer_Projects.html"
  }
}

function editProject(index)
{
  updateLocalStorage(LECTURER_PROJECT_INDEX_KEY, index);
  window.location = "Edit_Project.html";
}

function viewProject(index)
{
  updateLocalStorage(LECTURER_PROJECT_INDEX_KEY, index);
  projectsRetrieved = getDataLocalStorage(LECTURER_PROJECT_DATA_KEY)
  projects.fromData(projectsRetrieved)
  tasks = projects.getProject(index).tasks
  updateLocalStorage(TASKS_DATA_KEY, tasks)
  window.location = "Lecturer_View_Project.html";
}
