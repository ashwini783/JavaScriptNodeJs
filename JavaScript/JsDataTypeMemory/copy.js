let numOne=50;
let numTwo=numOne;
numOne=100

console.log(numOne)
console.log(numTwo)

const person1={
    name:"Ashwini",
    age:23
}
// const person2={
//     name:"John",
//     age:24
// }
const person2=person1 //reference of p1 and p2 is same
person2.name='Mark'
console.log(person1)
console.log(person2)

//Deep Copy
