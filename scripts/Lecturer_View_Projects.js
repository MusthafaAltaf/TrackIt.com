// Display task cards
function displayTasks(tasks)
{
  let taskCardsRef = document.getElementById("taskCards");
  let output = "";


  for (let i = 0; i < tasks.tasks.length; i++)
  {
    // Assignee code
    assignees = [];
    for (let assignee in tasks.tasks[i].assignee)
    {
      assignees.push(tasks.tasks[i].assignee[assignee].name)
    }

    // Task Title
    output += `<div class="cards-task-area">
    <table class="task-details" style="width:80%; padding-bottom:0.5px;">
    <col width="99%"/>
    <col width="1%" /><tr><td>
    <span class="title-header-task" id="taskTitleEdit${i}" contenteditable="true">${tasks.tasks[i].title}</span></td>`

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
