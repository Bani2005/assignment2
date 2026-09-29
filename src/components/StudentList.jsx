import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  const [sortOrder, setSortOrder] = useState("none");

  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "high") {
      return b.cgpa - a.cgpa;
    }

    if (sortOrder === "low") {
      return a.cgpa - b.cgpa;
    }

    return 0;
  });

  return (
    <section id="students" className="students-section">
      <div className="section-heading">
        <p>STUDENT INFORMATION</p>
        <h2>Our Students</h2>
      </div>

      <div className="sort-box">
        <label>Sort by CGPA: </label>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Default</option>
          <option value="high">Highest to Lowest</option>
          <option value="low">Lowest to Highest</option>
        </select>
      </div>

      <div className="student-grid">
        {sortedStudents.map((student) => (
          <StudentCard
            key={student.roll}
            student={student}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentList;