"use client";

import { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Dora" },
    { id: 2, name: "Poo" },
  ]);

  const [message, setMessage] = useState("");

  // GET
  async function getStudents() {
    const response = await fetch("/api/students");
    const data = await response.json();

    setStudents(data);
    setMessage("Students loaded successfully");
  }

  // POST
  async function addStudent() {
    const response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 3,
        name: "Mickey",
      }),
    });

    const data = await response.json();

    setStudents(data.students);
    setMessage(data.message);
  }

  // PUT
  async function updateStudent() {
    const response = await fetch("/api/students", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        name: "Dora Updated",
      }),
    });

    const data = await response.json();

    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === data.student.id ? data.student : student
      )
    );

    setMessage(data.message);
  }

  // DELETE
  async function deleteStudent() {
    const response = await fetch("/api/students", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 2,
      }),
    });

    const data = await response.json();

    setStudents(data.students);
    setMessage(data.message);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Student Management</h1>

      <p>{message}</p>

      <button onClick={getStudents}>
        GET - Display Students
      </button>

      <br />
      <br />

      <button onClick={addStudent}>
        POST - Add Student
      </button>

      <br />
      <br />

      <button onClick={updateStudent}>
        PUT - Update Student
      </button>

      <br />
      <br />

      <button onClick={deleteStudent}>
        DELETE - Delete Student
      </button>

      <h2>Students List</h2>

      {students.map((student) => (
        <p key={student.id}>
          {student.id} - {student.name}
        </p>
      ))}
    </main>
  );
}