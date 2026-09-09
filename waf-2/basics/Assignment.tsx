interface Student {
  id: number;
  name: string;
  marks: number;
}

function App() {
  const students: Student[] = [
    { id: 101, name: "Shashi", marks: 85 },
    { id: 102, name: "Rahul", marks: 78 },
    { id: 103, name: "Anil", marks: 92 },
    { id: 104, name: "Priya", marks: 88 },
    { id: 105, name: "Sneha", marks: 95 }
  ];

  return (
    <div>
      <h1>Student Information</h1>

      {students.map((student) => (
        <div key={student.id}>
          <p>Student ID: {student.id}</p>
          <p>Student Name: {student.name}</p>
          <p>Marks: {student.marks}</p>
        </div>
      ))}
    </div>
  );
}

export default App;