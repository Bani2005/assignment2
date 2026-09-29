function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="student-photo">
        <img src={student.photo} alt={student.name} />
      </div>

      <div className="student-info">
        <h3>{student.name}</h3>

        <p><strong>Roll:</strong> {student.roll}</p>
        <p><strong>Number:</strong> {student.number}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Semester:</strong> {student.semester}</p>
        <p><strong>CGPA:</strong> {student.cgpa}</p>
      </div>
    </div>
  );
}

export default StudentCard;