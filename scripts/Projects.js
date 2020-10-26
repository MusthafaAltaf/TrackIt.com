// Project class
class Project
{
  constructor(id = "", name = "", description = "", members = [], tasks = [])
  {
    this._id = id;
    this._name = name;
    this._description = description;
    this._members = members
    this._color = "46B6AC"
    this._tasks = tasks;
  }
  get id()
  {
    return this._id;
  }
  get name()
  {
    return this._name;
  }
  get description()
  {
    return this._description;
  }
  get members()
  {
    return this._members;
  }
  get color()
  {
    return this._color;
  }
  get tasks()
  {
    return this._tasks;
  }
  set name(name)
  {
    this._name = name;
  }
  set description(description)
  {
    this._description = description;
  }
  set members(members)
  {
    this._members = members;
  }
  set color(color)
  {
    this._color = color;
  }
  set tasks(tasks)
  {
    this._tasks = tasks;
  }
  fromData(data)
  {
    this._id = data._id
    this._name = data._name;
    this._description = data._description;
    this._members = data._members;
    this._color = data._color;
    this._tasks = data._tasks
    //this._tasks = [];
    // let projectData = data._tasks;
    // for (let i = 0; i < projectData.length; i++){
    //   let task = new Task();
    //   task.fromData(data[i]);
    //   this._projects.push(project);
    // }
  }
}

// Project List Class
class ProjectList
{
  constructor(projects = [])
  {
    this._idController = 0;
    this._projects = projects;
  }
  get projects()
  {
    return this._projects;
  }
  get idController()
  {
    return this._idController;
  }
  set idController(idController)
  {
    this._idController = idController;
  }
  addProject(name, description, members)
  {
    this._idController += 1;
    let id = this._idController;
    let project = new Project(id, name, description, members);
    let color = this.generateColour(project)
    project.color = color;
    this._projects.push(project);
  }
  addStudentProject(project)
  {
    this._projects.push(project);
  }
  getProject(index)
  {
    return this._projects[index];
  }
  removeProject(id)
  {
    for (let project in this._projects)
    {
      if(this._projects[project]._id === id)
      {
        this._projects.splice(project,1);
      }
    }
  }

  generateColour(project)
  {
    let available_colors = ["46B6AC","4f95f0","ffcb30","e34a39"];
    let count = (project.id - 1) % available_colors.length
    return available_colors[count];
  }

  fromData(projectObj)
  {
    this._projects = [];
    let data = projectObj._projects;
    for (let i = 0; i < data.length; i++){
      let project = new Project();
      project.fromData(data[i]);
      this._projects.push(project);
    }
  }
}


// Global ProjectList instance variable
let projects = new ProjectList();
if(checkIfDataExistsLocalStorage(ID_CONTROLLER_KEY))
{
  let retreivedIdController = getDataLocalStorage(ID_CONTROLLER_KEY);
  projects.idController = retreivedIdController;
}
