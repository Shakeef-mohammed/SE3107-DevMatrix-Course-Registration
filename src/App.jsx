import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [courseName, setCourseName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    alert(
      "Registration Successful!\n" +
      "Student Name: " + studentName +
      "\nStudent ID: " + studentID +
      "\nCourse Name: " + courseName
    );
  };

  return (
    <div className="container">
      <h1>University Course Registration System</h1>

      <form onSubmit={handleRegister}>
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />

        <label>Student ID</label>
        <input
          type="text"
          placeholder="Enter your student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          required
        />

        <label>Course Name</label>
        <input
          type="text"
          placeholder="Enter your course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;