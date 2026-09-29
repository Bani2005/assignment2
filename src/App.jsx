import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import Footer from "./components/Footer";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Ananya Sen",
      roll: "101",
      number: "9876543210",
      department: "BCA",
      semester: "6th",
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Rahul Das",
      roll: "102",
      number: "9876543211",
      department: "BCA",
      semester: "6th",
      cgpa: 8.8,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Priya Roy",
      roll: "103",
      number: "9876543212",
      department: "BCA",
      semester: "6th",
      cgpa: 8.5,
      photo: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Arjun Ghosh",
      roll: "104",
      number: "9876543213",
      department: "BCA",
      semester: "6th",
      cgpa: 8.1,
      photo: "https://i.pravatar.cc/150?img=11"
    }
  ]);

  const addStudent = (newStudent) => {
    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent
    ]);
  };

  return (
    <>
      <Header />

      <main>
        <section id="about" className="about">
          <p>WELCOME TO OUR PORTAL</p>

          <h1>Student Information Management</h1>

          <p>
            Manage student details and organize students
            according to their academic performance.
          </p>
        </section>

        <AddStudent onAddStudent={addStudent} />

        <StudentList students={students} />
      </main>

      <Footer />
    </>
  );
}

export default App;