
const person1={
    name:"Ashwini",
    age:24,
    greet:function(){
        console.log(`${this.name} says hi`) //Op=> Ashwini says hi
    }
}
person1.greet()

const person2={
    name:"Ashu",
    age:23,
    greet:()=>{
        console.log(`${this.name} says hi`)  //Op=> undefined says hi
    }
}
person2.greet()
