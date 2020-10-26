var pieChartRow = [['Task Name', 'Time Taken']]

function displayCharts()
{

  document.getElementById('chart').style.display = "initial"
  document.getElementById('chart2').style.display = "initial"

  let tasksRetrieved =  getDataLocalStorage(TASKS_DATA_KEY);
  tasks.fromData(tasksRetrieved);
  //let taskIndex =  getDataLocalStorage(TASK_ID_CONTROLLER_KEY);
  let task = tasks.tasks
  //console.log(projects);
  //console.log(projects.projects[0].tasks.tasks[0].expectedTime);
  //console.log(tasks.tasks);


  for (let i = 0; i < task.length; i++)
  {
    pieChartRow.push([task[i].title, parseInt(task[i].timeTaken)]);
  }

  var data = google.visualization.arrayToDataTable(pieChartRow)
  var options = {'title':'Expected Time'};

  var chart = new google.visualization.PieChart(document.getElementById('pieChart'));

  chart.draw(data, options);
}
