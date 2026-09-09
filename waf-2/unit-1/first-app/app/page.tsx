// export default function Home() {
//   const students={
//     name:"shashidhar",
//     age:22,
//     course:"MCA"
//   };


//   return (
//     <div>
//       <h1>Welcome to Next.js!</h1> 
//       <p> name: ({students.name})</p>
//       <p> age: ({students.age})</p>
//       <p> course: ({students.course})</p>    
//     </div>
//   );
// }


// export default function Home() {
//   const number=25;


//   return (
//     <div>
//       <h1>Even or Odd</h1> 
//       {
//         number %2===0 ?
//         <p>{number} is Enen</p>
//         :
//         <p>{number} is Odd</p>

//       }  
//     </div>
//   );
// }




// export default function Home() {
//   const number = 5;
//   let factorial = 1;

//   for (let i = 1; i <= number; i++) {
//     factorial = factorial * i;
//   }

//   return (
//     <div>
//       <h1>Factorial</h1>

//       <p>Factorial of {number} is {factorial}</p>
//     </div>
//   );
// }






// export default function Home() {
//   const numbers = [10, 20, 30, 40, 50];

//   return (
//     <div>
//       <h1>Array</h1>

//       <p>Array: {numbers.join(", ")}</p>
//       <p>Array Length: {numbers.length}</p>
//     </div>
//   );
// }








// ...................................................................................................................

// import About from "./about/about";
// import Contact from "./contact/contact";
import Loading from "./loading";
// import NotFound from "./about/not-found";
import Error from "./student/page";
import StudentPage from "./student/page";



export default function Home() {
  return (
    <div>
      <h1>Heloo world</h1>
      <p>Welcome to Next.js!</p>
    
      <StudentPage/>
     
    </div>
  );
}   


