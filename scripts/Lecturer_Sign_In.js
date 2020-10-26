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
    if(checkIfDataExistsLocalStorage(LECTURERS_KEY))
    {
      lecturersList = getDataLocalStorage(LECTURERS_KEY)
      let incorrectNameOrPassword = true;
      for (let i in lecturersList)
      {
        if(lecturersList[i].username == username && lecturersList[i].password == password)
        {
          localStorage.setItem("UserName", username);
          incorrectNameOrPassword = false
          updateLocalStorage(LECTURER_SIGNED_IN_KEY, lecturersList[i].id)
          window.location = "Lecturer_Projects.html"
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
