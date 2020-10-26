function signIn()
{
  let usernameRef = document.getElementById("sign-in-username")
  let passwordRef = document.getElementById("sign-in-password")

  let username = usernameRef.value
  let password = passwordRef.value

  if(username.trim() == "")
  {
    alert("Enter your username")
  }
  else if(password.trim() == "")
  {
    alert("Enter your password")
  }
  else
  {
    if(checkIfDataExistsLocalStorage(STUDENTS_KEY))
    {
      studentsList = getDataLocalStorage(STUDENTS_KEY)
      let incorrectNameOrPassword = true;
      for (let i in studentsList)
      {
        if(studentsList[i].username == username && studentsList[i].password == password)
        {
          localStorage.setItem("UserName", username);
          incorrectNameOrPassword = false
          updateLocalStorage(STUDENT_SIGNED_IN_KEY, studentsList[i].id)
          window.location = "Student_Projects.html"
        }
      }
      if(incorrectNameOrPassword)
      alert("Incorrect username/password. Please re-enter your details.")
    }
    else
    {
      alert("Incorrect username/password. Please re-enter your details.")
    }
  }
}
