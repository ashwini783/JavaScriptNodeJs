//Objects are just entities that define the particular properties of specific object
//Object are like key value pair
let person1={
    name:"John Stev",
    age:25,
    ownsAcar:true,
    gendre:"Male",
    address:{country:"India",city:"Pune",email:"abc@gmail.com"},
    sayHi:function(myCountry){ //when function is part of object those particular method are known as method
        console.log("Hello", this.name ," and Welcome To", myCountry)
    },
    allies:["Tony stark","Hulk"],
    isEmployed:true
}
console.log(person1)

console.log(person1.name)
console.log(person1['age'])
console.log(person1['address']['country'])
// or console.log(person1.address.country)
console.log(person1.allies.push("Adam"))
console.log(person1)
console.log(person1['allies'][0])  
//console.log(person1.allies[0])

person1.ownsAcar=false;
console.log(person1)

//to add new key in object
person1.address.phone="9876543987"
console.log(person1)

//to delete element from object
delete person1.isEmployed
console.log(person1)

person1.sayHi("US")