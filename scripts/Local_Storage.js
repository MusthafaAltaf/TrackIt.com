// Constants used as KEYS for LocalStorage
const LECTURER_PROJECT_INDEX_KEY = "lecturerProjectIndex";
const LECTURER_PROJECT_DATA_KEY = "lecturerProjectData";
const ID_CONTROLLER_KEY = "idControllerKey"
const STUDENTS_KEY = "studentsKey"
const STUDENT_SIGNED_IN_KEY = "studentSignedIn"
const LECTURERS_KEY = "lecturersKey"
const LECTURER_SIGNED_IN_KEY = "lecturerSignedIn"
// const STUDENT_PROJECT_INDEX_KEY = "studentProjectIndex";
// const STUDENT_PROJECT_DATA_KEY = "studentProjectData";

// Function to check if data exists in local storage
function checkIfDataExistsLocalStorage(key)
{
  let retVal = true;
  if (typeof(Storage) !== "undefined")
  {
    let dataRetrieved = localStorage.getItem(key);
    let dataDeserialised = JSON.parse(dataRetrieved);
    if (dataRetrieved == null)
    {
      retVal = false;
    }
    else
    {
      for(let prop in  dataDeserialised)
      {
        if(dataDeserialised[prop] === null || typeof  dataDeserialised[prop] === "undefined")
        {
          retVal = false;
        }
      }
    }
  }
  else
  {
    retVal = false;
  }
  return retVal;
}

// Function to update local storage
function updateLocalStorage(key, data)
{
  let dataSerialised = JSON.stringify(data);
  localStorage.setItem(key,dataSerialised);
}

// Function to get data from local storage
function getDataLocalStorage(key)
{
  let dataRetrieved = localStorage.getItem(key);
  let dataDeserialised = JSON.parse(dataRetrieved);
  return dataDeserialised;
}
