import { useState } from "react";

function AddStudent({ onAddStudent }) {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    number: "",
    department: "",
    semester: "",
    cgpa: "",
    photo: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.name ||
      !student.roll ||
      !student.number ||
      !student.department ||
      !student.semester ||
      !student.cgpa
    ) {
      alert("Please fill all the fields");
      return;
    }

    onAddStudent({
      ...student,
      cgpa: Number(student.cgpa),
      photo:
        student.photo ||
        "https://i.pravatar.cc/150?img=1"
    });

    setStudent({
      name: "",
      roll: "",
      number: "",
      department: "",
      semester: "",
      cgpa: "",
      photo: ""
    });
  };

  return (
    <section className="add-student">
      <h2>Add New Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="roll"
          placeholder="Roll Number"
          value={student.roll}
          onChange={handleChange}
        />

        <input
          type="text"
          name="number"
          placeholder="Phone Number"
          value={student.number}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="semester"
          placeholder="Semester"
          value={student.semester}
          onChange={handleChange}
        />

        <input
          type="number"
          step="0.01"
          name="cgpa"
          placeholder="CGPA"
          value={student.cgpa}
          onChange={handleChange}
        />

        <input
          type="text"
          name="photo"
          placeholder="Photo URL (optional)"
          value={student.photo}
          onChange={handleChange}
        />

        <button type="submit">
          + Add Student
        </button>
      </form>
    </section>
  );
}

export default AddStudent;