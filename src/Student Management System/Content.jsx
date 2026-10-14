import './data.css';
function Content({name,setName,course,setCourse,age,setAge,email,setEmail,addstudent}) {
  return (
    <div className="content">
      <form onSubmit={addstudent}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Course" value={course} 
        onChange={(e)=>setCourse(e.target.value)}/>
        <input type="tel" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button>Add Student</button>
      </form>
    </div>
  )
}

export default Content
