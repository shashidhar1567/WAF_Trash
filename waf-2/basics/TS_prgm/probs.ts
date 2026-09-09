// interface Studentprob {
//     name: string;
//     usn: string;
//     age: number;
//     course: string;
//     college: string;
//     marks: number;

// }
 
// function displayStudentDetails(probs:Studentprob): void {
//     console.log("Name:",probs.name);
//     console.log("USN:", probs.usn);
//     console.log("Age:", probs.age);
//     console.log("Course:", probs.course);
//     console.log("College:", probs.college);
//     console.log("Marks:", probs.marks);
// }   
// const studentprob ={
//     name: "John Doe",
//     usn: "123456",
//     age: 20,
//     course: "Computer Science",
//     college: "XYZ University",
//     marks: 85       
// };  

// displayStudentDetails(studentprob);










interface WelcomeProps {
  number: number;
}

function Welcome(props: WelcomeProps) {
  return `Welcome, ${props.number}!`;
}

const greetProps: WelcomeProps = {
  number: 42,
};

const result = Welcome(greetProps);
console.log(result);
