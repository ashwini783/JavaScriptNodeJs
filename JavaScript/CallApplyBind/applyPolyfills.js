
Function.prototype.myApply=function(context={},args=[]){  //...args suggest that u can add whatever number of parameter
   console.log(this) //it will point to method to which myApply() is attached
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
person1.printDetails.myApply(person2,["Pune"])
person1.printAge.myApply(person2)
console.log(person2)
//person2 is context
//this-printDetails
// person2.myFunction=this



