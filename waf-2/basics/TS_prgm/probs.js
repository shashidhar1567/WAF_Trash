"use strict";
// interface Studentprob {
//     name: string;
//     usn: string;
//     age: number;
//     course: string;
//     college: string;
//     marks: number;
function Welcome(props) {
    return `Welcome, ${props.name}!`;
}
const greetProps = {
    name: "Shashi",
};
const result = Welcome(greetProps);
console.log(result);
