
const person1={
    name:"Ashwini",
    age:24,
    //'this' in  method will point to its object
    greet:function(){ //when u create function as method, method created as normal function
        console.log(`${this.name} says hi`) //Op=> Ashwini says hi
    }
}
person1.greet()

const person2={
    name:"Ashu",
    age:23,
    //arrow function never points to its parent object inside which it is created
    greet:()=>{
        console.log(`${this.name} says hi`)  //Op=> undefined says hi
    }
}
person2.greet()
