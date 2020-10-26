// Constants used as KEYS for LocalStorage
const TASKS_INDEX_KEY = "tasksIndex";
const TASKS_DATA_KEY = "tasksData";
const TASK_ID_CONTROLLER_KEY = "taskIdControllerKey"

// Task class
class Task
{
  constructor(id = "", title = "", description = "", dueDate = "",assignee = [], expectedTime = "")
  {
    this._id = id;
    this._title = title;
    this._assignee = assignee;
    this._description = description;
    this._dueDate = dueDate;
    this._timeTaken = "Not specified";
    this._progress = 0;
    this._expectedTime = expectedTime;
    this._comments = [];
  }
  get id()
  {
    return this._id;
  }
  get title()
  {
    return this._title;
  }
  get assignee()
  {
    return this._assignee;
  }
  get description()
  {
    return this._description;
  }
  get dueDate()
  {
    return this._dueDate;
  }
  get timeTaken()
  {
    return this._timeTaken;
  }
  get progress()
  {
    return this._progress;
  }
  get expectedTime()
  {
    return this._expectedTime;
  }
  set title(title)
  {
    this._title = title;
  }
  set assignee(assignee)
  {
    this._assignee = assignee;
  }

  set description(description)
  {
    this._description = description;
  }
  set dueDate(dueDate)
  {
    this._dueDate = dueDate;
  }
  set timeTaken(timeTaken)
  {
    this._timeTaken = timeTaken;
  }
  set progress(progress)
  {
    this._progress = progress;
  }
  fromData(data)
  {
    this._id = data._id;
    this._title = data._title;
    this._assignee = data._assignee;
    this._description = data._description;
    this._dueDate = data._dueDate;
    this._timeTaken = data._timeTaken;
    this._progress = data._progress;
    this._expectedTime = data._expectedTime;
  }
}

// Task List Class
class TaskList
{
  constructor(tasks = [])
  {
    this._idController = 0;
    this._tasks = tasks;
  }
  get tasks()
  {
    return this._tasks;
  }
  get idController()
  {
    return this._idController;
  }
  set idController(idController)
  {
    this._idController = idController;
  }

  addTask(title, description,dueDate,assignee, expectedTime)
  {
    this._idController += 1;
    let id = this._idController;
    let task = new Task(id, title, description, dueDate, assignee, expectedTime);
    this._tasks.push(task);
  }

  getTask(index)
  {
    return this._tasks[index];
  }

  removeTasks(id)
  {
    for (let task in this._tasks)
    {
      if(this._tasks[task]._id === id)
      {
        this._tasks.splice(task,1);
      }
    }
  }


  fromData(tasksObj)
  {
    this._tasks = [];
    let data = tasksObj._tasks;
    for (let i = 0; i < data.length; i++){
      let task = new Task();
      task.fromData(data[i]);
      this._tasks.push(task);
    }
  }
}


// Global ProjectList instance variable
let tasks = new TaskList();
if(checkIfDataExistsLocalStorage(TASK_ID_CONTROLLER_KEY))
{
  let retreivedIdController = getDataLocalStorage(TASK_ID_CONTROLLER_KEY);
  tasks.idController = retreivedIdController;
}
