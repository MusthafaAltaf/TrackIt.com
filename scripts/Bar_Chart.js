var barChartRow = [['Time Taken', 'Actual time taken', 'Expected time taken']]

function displayBarChart()
{
  let tasksRetrieved =  getDataLocalStorage(TASKS_DATA_KEY);
  tasks.fromData(tasksRetrieved);
  let task = tasks.tasks

  for (let i = 0; i < task.length; i++)
  {
    barChartRow.push([task[i].title, parseInt(task[i].timeTaken), parseInt(task[i].expectedTime)]);
  }

  var data = google.visualization.arrayToDataTable(barChartRow)
  var options = {
    title: 'Amount of time taken to complete tasks',
    chartArea: {width: '50%'},
    colors: ['#873ba8', '#d44675'],
    hAxis: {
      title: 'Number of hours',
      minValue: 0
    },
    vAxis: {
      title: 'Task'
    }
  };
  var chart = new google.visualization.BarChart(document.getElementById('barChart'));
  chart.draw(data, options);
}
