// Display task cards
function displayTasks(tasks)
{
  let taskCardsRef = document.getElementById("taskCards");
  let output = "";
  let allStudents = getDataLocalStorage(STUDENTS_KEY)
  let studentSignedInID = getDataLocalStorage(STUDENT_SIGNED_IN_KEY)
  let nameOfStudentSignedIn = ""
  for(let i in allStudents)
  {
    if (studentSignedInID == allStudents[i].id)
    nameOfStudentSignedIn = allStudents[i].name
  }

  for (let i = 0; i < tasks.tasks.length; i++)
  {
    // Assignee code
    assignees = [];
    for (let assignee in tasks.tasks[i].assignee)
    {
      assignees.push(tasks.tasks[i].assignee[assignee].name)
    }
    if (assignees.includes(nameOfStudentSignedIn))
    {
    // Task Title
    output += `<div class="cards-task-area">
    <table class="task-details" style="width:100%; padding-bottom:0.5px;">
    <col width="80%"/>
    <col width="10%" />
    <col width="10%" />
    <tr><td>
    <span class="title-header-task" id="taskTitleEdit${i}" contenteditable="true">${tasks.tasks[i].title}</span></td>`

    // Save Button
    output += `<td style="text-align:right;"><div>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored"  style="; color: #3b3b3b; background-color:#ebebeb;" onclick = "saveTask(${i})" >
    <i class="material-icons">save</i>
    </button></div></td> `

    // Delete Button
    output += `<td style="padding-right: 100px;"><div>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored" style="; color: #3b3b3b; background-color:#ebebeb;" onclick = "deleteTask(${i})" >
    <i class="material-icons">delete</i>
    </button></div></td></tr></table>`

    // Assignee
    output += `<table class="task-details" style="width:80%;"><col width="25%"/>
    <col width="65%" />
    <tr>
    <td><span class="task-labels">Assignee:</span></td>
    <td><span class="task-labels" id="taskAssigneeEdit${i}" contenteditable="false">${assignees}</span></td>
    </tr>`

    // Due date
    output += `<tr>
    <td><span class="task-labels">Due Date:</span></td>
    <td><span class="task-labels" id="taskDateEdit${i}" contenteditable="true">${tasks.tasks[i].dueDate}</span></td>
    </tr>`

    // Time taken
    output += `<tr>
    <td><span class="task-labels">Time Taken:</span></td>
    <td><span class="task-labels" id="taskTimeTakenEdit${i}" contenteditable="true">${tasks.tasks[i].timeTaken}</span></td>
    </tr>`

    // Expected Time taken
    output += `<tr>
    <td><span class="task-labels">Expected time:</span></td>
    <td><span class="task-labels" id="expectedTimeEdit${i}" contenteditable="false">${tasks.tasks[i].expectedTime}</span></td>
    </tr>`

    // Description
    output += `	<tr>
    <td><span class="task-labels">Description:</span></td>
    <td><span class="task-labels" id="taskDescriptionEdit${i}" contenteditable="true">${tasks.tasks[i].description}</span></td>
    </tr>
    </table>`

    // Progress bar
    output += `<div class="progress-bar-back rounded-corners">
    <div class="progress-bar rounded-corners" style="width:${tasks.tasks[i].progress}%">${tasks.tasks[i].progress}%</div>
    </div>

    <table class="task-details" style="width:80%;"><tr><col width="25%"/>
    <col width="65%" />
    <td><span class="task-labels"><b>Completed:</b></span></td>
    <td><span class="task-labels" id="taskProgressEdit${i}" contenteditable="true">${tasks.tasks[i].progress}</span><b>%</b></td>
    </tr>
    </table>`
    }
    else
    {
    // Task Title
    output += `<div class="cards-task-area">
    <table class="task-details" style="width:100%; padding-bottom:0.5px;">
    <col width="80%"/>
    <col width="10%" />
    <col width="10%" />
    <tr><td>
    <span class="title-header-task" id="taskTitleEdit${i}" contenteditable="false">${tasks.tasks[i].title}</span></td>`

    // Assignee
    output += `<table class="task-details" style="width:80%;"><col width="25%"/>
    <col width="65%" />
    <tr>
    <td><span class="task-labels">Assignee:</span></td>
    <td><span class="task-labels" id="taskAssigneeEdit${i}" contenteditable="false">${assignees}</span></td>
    </tr>`

    // Due date
    output += `<tr>
    <td><span class="task-labels">Due Date:</span></td>
    <td><span class="task-labels" id="taskDateEdit${i}" contenteditable="false">${tasks.tasks[i].dueDate}</span></td>
    </tr>`

    // Time taken
    output += `<tr>
    <td><span class="task-labels">Time Taken:</span></td>
    <td><span class="task-labels" id="taskTimeTakenEdit${i}" contenteditable="false">${tasks.tasks[i].timeTaken}</span></td>
    </tr>`

    // Expected Time taken
    output += `<tr>
    <td><span class="task-labels">Expected time:</span></td>
    <td><span class="task-labels" id="expectedTimeEdit${i}" contenteditable="false">${tasks.tasks[i].expectedTime}</span></td>
    </tr>`

    // Description
    output += `	<tr>
    <td><span class="task-labels">Description:</span></td>
    <td><span class="task-labels" id="taskDescriptionEdit${i}" contenteditable="false">${tasks.tasks[i].description}</span></td>
    </tr>
    </table>`

    // Progress bar
    output += `<div class="progress-bar-back rounded-corners">
    <div class="progress-bar rounded-corners" style="width:${tasks.tasks[i].progress}%">${tasks.tasks[i].progress}%</div>
    </div>

    <table class="task-details" style="width:80%;"><tr><col width="25%"/>
    <col width="65%" />
    <td><span class="task-labels"><b>Completed:</b></span></td>
    <td><span class="task-labels" id="taskProgressEdit${i}" contenteditable="false">${tasks.tasks[i].progress}</span><b>%</b></td>
    </tr>
    </table>`
    }

    // Comments
    output += `
    <div>
		<button id="showCommentBtn${i}" type="button" onclick="openComment(${i})">Show Comment Section</button>
			<div class="popupComment" id="popupComment${i}" style="display:none;background-color:rgba(255,210,220,0.65);">
				<br>
				<input type="text" id = "typeComment${i}" size="30">
				<button onclick="post(${i})" type="button" name="button">Comment</button>
				<button onclick="clearCommentInput(${i})" type="button" name="clearCommentIn">Clear</button>
				<br>
				<p id="commentArea${i}" style="color:black"></p>
			</div>
		</div>
    <script src="scripts/Comments.js"></script>
    </div>`

  }

  taskCardsRef.innerHTML = output;
}

// Function to add a new task
function addNewTask(taskTitle, taskDueDate, taskDescription, expectedTime)
{
  let taskNameRef = document.getElementById("taskName")
  let taskDescriptionRef = document.getElementById("taskDescription")
  let taskDueDateRef = document.getElementById("taskDueDate")
  let taskAssigneeRef = document.getElementById("taskAssignee")
  let expectedTimeRef = document.getElementById("expectedTime")
  if(taskNameRef.value.trim() == "")
  {
    alert("Please enter a task name")
  }
  else
  {
    taskTitle = taskNameRef.value;
    taskDescription = taskDescriptionRef.value;
    taskDueDate = taskDueDateRef.value;

    // Assignee code
    let taskAssignees = []
    let assigneeIDs = assigneeSelection.selected()
    for (let i in assigneeIDs)
    {
      for (let j in projectMembers)
      {
        if(projectMembers[j].id == assigneeIDs[i])
        {
          taskAssignees.push(projectMembers[j])
        }
      }
    }
    expectedTime = expectedTimeRef.value;
    tasks.addTask(taskTitle, taskDescription, taskDueDate,taskAssignees, expectedTime);
    updateLocalStorage(TASKS_DATA_KEY, tasks);
    updateLocalStorage(TASK_ID_CONTROLLER_KEY, tasks.idController);

    let projectsRetrieved =  getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
    projects.fromData(projectsRetrieved);
    let projectIndex =  getDataLocalStorage(LECTURER_PROJECT_INDEX_KEY);
    let project = projects.getProject(projectIndex);
    project.tasks = tasks
    updateLocalStorage(LECTURER_PROJECT_DATA_KEY, projects)

    displayTasks(tasks)
    location.reload()
  }
}

//Function to clear fields
function clearAllTask()
{
  document.getElementById('taskName').value = ' '
  document.getElementById('taskDescription').value = ' '
  document.getElementById('taskDueDate').value = ' '
  document.getElementById('taskAssignee').value = ' '
  document.getElementById('expectedTime').value = ' '
}

// Function to save a task properties
function saveTask(index)
{
  let titleTaskRef = document.getElementById("taskTitleEdit"+index.toString()).innerHTML;
  let descriptionTaskRef = document.getElementById("taskDescriptionEdit"+index.toString()).innerHTML;
  let dateTaskRef = document.getElementById("taskDateEdit"+index.toString()).innerHTML;
  let timeTaskRef = document.getElementById("taskTimeTakenEdit"+index.toString()).innerHTML;
  let assigneeTaskRef = document.getElementById("taskAssigneeEdit"+index.toString()).innerHTML;
  let progressTaskRef = document.getElementById("taskProgressEdit"+index.toString()).innerHTML;
  let expectedTimeRef = document.getElementById("expectedTimeEdit"+index.toString()).innerHTML;
  task = tasks.getTask(index);
  if(titleTaskRef == "")
  {
    alert("Please enter a task name")
  }
  else
  {
    task.title = titleTaskRef;
    task.description = descriptionTaskRef;
    task.dueDate = dateTaskRef;
    task.timeTaken = timeTaskRef;
    task.progress = progressTaskRef;
    task.expectedTime = expectedTimeRef

    updateLocalStorage(TASKS_DATA_KEY, tasks);
    alert("Changes saved.")
    tasksRetrieved =  getDataLocalStorage(TASKS_DATA_KEY);
    tasks.fromData(tasksRetrieved);

    let projectsRetrieved =  getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
    projects.fromData(projectsRetrieved);
    let projectIndex =  getDataLocalStorage(LECTURER_PROJECT_INDEX_KEY);
    let project = projects.getProject(projectIndex);
    project.tasks = tasks
    updateLocalStorage(LECTURER_PROJECT_DATA_KEY, projects)

    displayTasks(tasks);
  }
  location.reload();
}
// Function to delete task
function deleteTask(index)
{
  confirmDelete = confirm ("Are you sure you want to delete this task?")
  if(confirmDelete)
  {
    task = tasks.getTask(index);
    tasks.removeTasks(task.id);
    updateLocalStorage(TASKS_DATA_KEY, tasks);

    let projectsRetrieved =  getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
    projects.fromData(projectsRetrieved);
    let projectIndex =  getDataLocalStorage(LECTURER_PROJECT_INDEX_KEY);
    let project = projects.getProject(projectIndex);
    project.tasks = tasks
    updateLocalStorage(LECTURER_PROJECT_DATA_KEY, projects)

    alert("Task has been deleted");
    window.location = "Student_View_Project.html"
  }
}

// main

// Assignee code
let assignees = [];
if(checkIfDataExistsLocalStorage(LECTURER_PROJECT_DATA_KEY) && checkIfDataExistsLocalStorage(LECTURER_PROJECT_INDEX_KEY))
{
  index = getDataLocalStorage(LECTURER_PROJECT_INDEX_KEY)
  projectsRetrieved = getDataLocalStorage(LECTURER_PROJECT_DATA_KEY);
  projects.fromData(projectsRetrieved)
  project = projects.getProject(index)
  projectMembers = project.members

  let taskAssigneeRef = document.getElementById("taskAssignee");
  let options = ""
  for (let i in projectMembers)
  {
    options += `<option value=${projectMembers[i].id}>${projectMembers[i].name} (${projectMembers[i].id}) </option>`
  }

  taskAssigneeRef.innerHTML = options

  assigneeSelection = new SlimSelect({
    select: '#taskAssignee'
  })
}

if (checkIfDataExistsLocalStorage(TASKS_DATA_KEY))
{
  tasksRetrieved =  getDataLocalStorage(TASKS_DATA_KEY);
  tasks.fromData(tasksRetrieved);
  displayTasks(tasks);
  //load pie chart
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(displayCharts);
  //load bar chart
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(displayBarChart);
}
