const person1={
  name:"Ashu",
  age:23,
  printDetails:function(hobbies1,hobbies2){
      console.log(`My Name is ${this.name} and age is ${this.age} ,I love ${hobbies1}, ${hobbies2}`)
    }
}

const person2={
  name:"Adam",
  age:25
}
let pd=person1.printDetails.bind(person2)  //bind method wont call printDetails() it just store it
pd('swimming','reading') //we can call it whenever we want, we can pass the arguments here
console.log(pd)



const pikaChu={
    firstName:"Ashwini",
    lastName:"Avhad",
    getMyName:function(){
      return this.firstName+" "+this.lastName;
    }
}
const pockName=function(){ // here updating the context of pockName with value of pickChu object
    console.log("My Full Name Is",this.getMyName())
}
const callMe=pockName.bind(pikaChu)  //bind method returns the new method we can call it later
callMe();