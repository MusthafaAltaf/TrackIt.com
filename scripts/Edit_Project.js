// Main
let titleRef = document.getElementById("title");
let descriptionRef = document.getElementById("description");
let colorRef = document.getElementById("color");
let membersSelection = "";
let allStudents = []
if (checkIfDataExistsLocalStorage(LECTURER_PROJECT_DATA_KEY) && checkIfDataExistsLocalStorage(LECTURER_PROJECT_INDEX_KEY))
{
  projectsRetrieved =  getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
  projects.fromData(projectsRetrieved);
  projectIndex =  getDataLocalStorage(LECTURER_PROJECT_INDEX_KEY);
  project = projects.getProject(projectIndex);
  displayProjectInfo(project);
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

    for (let i in project.members)
    {
      membersSelection.set(project.members[i].id)
    }
  }
}


// ---------------- Functions --------------------
// Displays information about the porject
function displayProjectInfo(project)
{
  titleRef.value = project.name;
  descriptionRef.value = project.description;
  colorRef.value = project.color;
}

// Saves all changes
function saveChanges()
{
  projectsRetrieved =  getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
  projects.fromData(projectsRetrieved);
  projectIndex =  getDataLocalStorage(LECTURER_PROJECT_INDEX_KEY);
  project = projects.getProject(projectIndex);
  if(titleRef.value.trim() == "")
  {
    alert("Please enter a project name")
  }
  else
  {
    project.name = titleRef.value;
    project.description = descriptionRef.value;
    project.color = colorRef.value;

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
    project.members = members

    updateLocalStorage(LECTURER_PROJECT_DATA_KEY, projects);
    window.location = "Lecturer_Projects.html";
  }
}

// Cancel changes
function cancelChanges()
{
  confirmCancel = confirm("Are you sure? All unsaved changes will be lost.")
  if (confirmCancel)
  window.location = "Lecturer_Projects.html";
}
