let person1={
    name:"Alice",
    details:{  //nested object
        age:30,
        gender:'Female',
        hobbies:['Swamming','Dancing','BasketBall']
    },
    greet:function(){
      console.log("Hi")
    }
}

function deepClone(input){
  //write the code that will create deep clone/copy
  let clone={}
   if(typeof input!='object'){
    // console.log("hi ",input)
    return input
   }

   if(Array.isArray(input)){
     let clonedArr=[]
     for(let i=0;i<input.length;i++){
        clonedArr[i]=deepClone(input[i])
        // clonedArr.push(val)
     }
     return clonedArr
   }
   const keys=Object.keys(input) //it returns the array of keys ['name','details']
//    console.log(keys)
   for(let i=0;i<keys.length;i++){
    const key=keys[i]
    // console.log("keys ",key)
    clone[key]=deepClone(input[key])
   }
   return clone
}

let deepCopyPerson1=deepClone(person1)
deepCopyPerson1.name='Mark'
deepCopyPerson1.details.gender='Male'
console.log(person1)
console.log(deepCopyPerson1)
