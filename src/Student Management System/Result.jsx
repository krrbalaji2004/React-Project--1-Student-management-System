
import './data.css';

function Result({ student, select, setselect, deleteStudent }) {
  return (
    <div className="result">
      <h3>Students</h3>
      <div className="pointer">
        <div className="student">
          {student.map((s) => (
            <div className="part" key={s.id}>
              <h4>{s.name}</h4>
              <p>{s.course} - Age {s.age}</p>

              <button onClick={() => setselect(s)} id="view">
                View Details
              </button>

              <button onClick={() => deleteStudent(s.id)} id="delete">
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="details">
          {select ? (
            <div>
              <h3 id="part">Student Details</h3>
              <p>Name: {select.name}</p>
              <p>Course: {select.course}</p>
              <p>Age: {select.age}</p>
              <p>Email: {select.email}</p>
            </div>
          ) : (
            <p>Select the student from the list to see the details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;