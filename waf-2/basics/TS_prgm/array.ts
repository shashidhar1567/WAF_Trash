// let number:number[]=[1,2,3,4,5];
// let total=0;

// for (let num of number) {
//     total += num;
// }
// console.log(total);




// functions
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(5, 10));


//arrow functions
const multiplyNumbers = (a: number, b: number): number => {
    return a * b;
};

console.log(multiplyNumbers(5, 10));