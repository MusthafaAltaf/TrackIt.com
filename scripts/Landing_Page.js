class Lecturer
{
  constructor(username = "", name = "", id = "", password = "")
  {
    this.username = username;
    this.name = name;
    this.id = id;
    this.password = password;
  }
}

class Student
{
  constructor(username = "", name = "", id = "", password = "")
  {
    this.username = username;
    this.name = name;
    this.id = id;
    this.password = password;
  }
}

if (!checkIfDataExistsLocalStorage(LECTURERS_KEY))
{
  let lecturerList = []
  lecturer = new Lecturer("lec0001", "Lecturer", "1", "123")
  lecturerList.push(lecturer)
  updateLocalStorage(LECTURERS_KEY, lecturerList)
}

if (!checkIfDataExistsLocalStorage(STUDENTS_KEY))
{
  let studentList = []
  student1 = new Student("al0001", "Alice", "30042178", "123")
  student2 = new Student("bob0002", "Bob", "30100212", "456")
  student3 = new Student("char0003", "Charlie", "31068937", "789")
  studentList.push(student1)
  studentList.push(student2)
  studentList.push(student3)
  updateLocalStorage(STUDENTS_KEY, studentList)
}
