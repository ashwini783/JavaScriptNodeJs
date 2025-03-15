


  const person1={
    name:"Ashu",
    age:23,
    printDetails:function(hobbies1,hobbies2){
        console.log(`My Name is ${this.name} and age is ${this.age} ,I love ${hobbies1}, ${hobbies2}`)
      }
  }
  const person2={
    name:"Jon",
    age:26
  }
  
  //when we want to send or store data in bulk we can use apply() method so we can use array to pass the values
 person1.printDetails.apply(person2,['swimming','football'])

 //how math.max() work with apply()
 let max=Math.max(1,2,3,4)
 console.log(max) //Math.max accept the separate values 

 let arr=[2,5,3,8,10] //to find max of array , apply() method will unpack the elements of array
 let maxElem=Math.max.apply(null,arr);
 console.log(maxElem)