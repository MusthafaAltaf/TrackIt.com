function signUp()
{
  let usernameRef = document.getElementById("sign-up-username")
  let fullnameRef = document.getElementById("sign-up-fullname")
  let idRef = document.getElementById("sign-up-id")
  let passwordRef = document.getElementById("sign-up-password")
  let confirmPasswordRef = document.getElementById("sign-up-re-password")

  let username = usernameRef.value
  let fullname = fullnameRef.value
  let id = idRef.value
  let password = passwordRef.value
  let confirmPassword = confirmPasswordRef.value

  if(username.trim() == "")
  {
    alert("Enter a username")
  }
  else if(fullname.trim() == "")
  {
    alert("Enter your fullname")
  }
  else if(id.trim() == "")
  {
    alert("Enter your id")
  }
  else if(password.trim() == "")
  {
    alert("Enter a password")
  }
  else if(password != confirmPassword)
  {
    alert("Passwords do not match. Please re-enter password")
  }
  else
  {
    student = new Student(username, fullname, id, password)
    studentList.push(student)
    updateLocalStorage(STUDENTS_KEY, studentList)
    window.location = "Student_Sign_In.html"
  }

}




// main
let studentList = []
if (checkIfDataExistsLocalStorage(STUDENTS_KEY))
{
  studentList = getDataLocalStorage(STUDENTS_KEY)
}
else
{
  updateLocalStorage(STUDENTS_KEY, studentList)
}
