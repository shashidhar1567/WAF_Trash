// export default function Home() {
//   const appName = process.env.APP_NAME;
//   const apiUrl = process.env.API_URL;

// import App from "next/dist/pages/_app";

  
//   return (
//     <div>
//       <h1>Welcome to {appName}</h1>
//       <p>API URL: {apiUrl}</p>
//       <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>
//       <p>{process.env.COLLEGE_NAME}</p>
//     </div>
//   ); 
// }


// interface Student {
//   id: number;
//   name: string;
//   marks: number;
// }

// function App() {
//   const students: Student[] = [
//     { id: 101, name: "Shashi", marks: 85 },
//     { id: 102, name: "Rahul", marks: 78 },
//     { id: 103, name: "Anil", marks: 92 },
//     { id: 104, name: "Priya", marks: 88 },
//     { id: 105, name: "Sneha", marks: 95 }
//   ];

//   return (
//     <div>
//       <h1>Student Information</h1>

//       {students.map((student) => (
//         <div key={student.id}>
//           <p>Student ID: {student.id}</p>
//           <p>Student Name: {student.name}</p>
//           <p>Marks: {student.marks}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;










// interface Student {
//   id: number;
//   name: string;
//   marks: number;
// }

// interface StudentListProps {
//   students: Student[];
// }

// function StudentList({ students }: StudentListProps) {
//   return (
//     <div>
//       <h2>Student List</h2>

//       {students.map((student) => (
//         <p key={student.id}>
//           ID: {student.id}, Name: {student.name}, Marks: {student.marks}
//         </p>
//       ))}
//     </div>
//   );
// }

// function App() {
//   const students: Student[] = [
//     { id: 101, name: "Ravi", marks: 85 },
//     { id: 102, name: "Priya", marks: 92 },
//     { id: 103, name: "Kumar", marks: 76 }
//   ];

//   return (
//     <div>
//       <StudentList students={students} />
//     </div>
//   );
// }

// export default App;











// interface Student {
//   name: string;
//   id: number;
//   marks: number;
//   result: string;
// }

// function App() {
//   const student: Student = {
//     name: "Ravi",
//     id: 101,
//     marks: 85,
//     result: "Pass"
//   };

//   return (
//     <div>
//       <h1>Student Result</h1>

//       <p>Name: {student.name}</p>
//       <p>ID: {student.id}</p>
//       <p>Marks: {student.marks}</p>
//       <p>Result: {student.result}</p>
//     </div>
//   );
// }


// export default App;


















// interface Student {
//   id: number;
//   name: string;
//   marks: number;
// }

// function App() {
//   const student: Student = {
//     id: 101,
//     name: "Ravi",
//     marks: 85
//   };

//   return (
//     <div>
//       <h1>Student Details</h1>

//       <p>Student ID: {student.id}</p>
//       <p>Student Name: {student.name}</p>
//       <p>Marks: {student.marks}</p>
//     </div>
//   );
// }

// export default App;
















interface Student {
  id: number;
  name: string;
  marks: number;
  result: string;
}

interface StudentListProps {
  students: Student[];
}

function StudentList({ students }: StudentListProps) {
  return (
    <div>
      <h2>Student Management System</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>{student.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  const students: Student[] = [
    { id: 101, name: "Ravi", marks: 85, result: "Pass" },
    { id: 102, name: "Priya", marks: 92, result: "Pass" },
    { id: 103, name: "Kumar", marks: 35, result: "Pass" },
    { id: 104, name: "Anitha", marks: 28, result: "Fail" }
  ];

  return (
    <StudentList students={students} />
  );
}