//polyfills of call method

function greet(){
    console.log("Hello")
}
console.log(greet) //no prototype is attached to this function
console.dir(greet) //dir will give all details of function


// console.dir(Function.prototype)

Function.prototype.sayHello=function(){
    console.log("Hello")
}
console.dir(Function.prototype)

Function.prototype.myCall=function(context={},...args){  //...args suggest that u can add whatever number of parameter
   console.log(this) //it will point to method to which myCall() is attached
   if(typeof this !='function'){
        throw new Error('cant be called')
   }
   context.myFunction=this
   context.myFunction(...args)

}


const person1={
    name:"AshwiniA",
    age:23,
    printDetails:function(city){
        console.log(`${this.name} and ${city}`)
    },
    printAge:function(){
      console.log(`${this.age}`)
    }
}
const person2={
    name:"Adam",
    age:22
}
person1.printDetails.myCall(person2,"Delhi")
person1.printAge.myCall(person2)

//person2 is context
//this-printDetails
// person2.myFunction=this



