import Header from './Student Management System/header'
import Content from './Student Management System/Content'
import Result from './Student Management System/Result';
import Footer from './Student Management System/footer';
import "./Student Management System/data.css";
import { useState } from 'react';
function App() {
  const[name,setname]=useState('');
const [course,setcourse]=useState('')
const [age,setage]=useState('')
const [email,setemail]=useState('')

const [student,setstudent]=useState(
  [
  {
    id:1,name:"Arun Kumar",course:"Computer Science",age:20,email:"Arun@gmail.com"
  },
{
  id:2,name:"Meena",course:"Electronics",age:21,email:"meena@gmail.com"
},
]
)
const[select,setselect]=useState(null)

function addStudent(e){
  e.preventDefault();
  if(name.trim()===""||course.trim()===""||age.trim()===""||email.trim()===""){
    alert("PLease Enter the field here");
    return;
  }
const newStudent={
  id:Date.now(),
  name:name,
  course:course,
  age:age,
  email:email
};

setstudent([...student,newStudent]);
setname('');
setcourse('');
setage('');
setemail('');
}
function deleteStudent(id) {
  setstudent(student.filter((s) => s.id !== id));
  setselect(null);
}
  return (
    <>
    <Header/>
    <Content name={name} 
    setName={setname}
     course={course}
      setCourse={setcourse}
      age={age}
    setAge={setage}
    email={email}
    setEmail={setemail}
    addstudent={addStudent}/>
    
    <Result student={student} select={select} setselect={setselect} deleteStudent={deleteStudent}/>
<Footer/>
    </>
  );
}

export default App;