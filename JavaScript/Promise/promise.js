//1.
let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const isHead=  Math.random()>=0.5  // here we expects Head  //math.random generate number between 0 to 1   
     if(isHead){
        resolve("We Got Heads Promise Fulfilled")
     }
     else{
        reject("We Got Tail And Promise Failed")
     }
    },1000)
})
promise1.then((data)=>{ //then() handles the success 
    console.log("Hi ",data)
}).catch((error)=>{ //catch() heandles the failure
    console.log(error)
}).finally(()=>{ //it will be executed whether promise is resolved or rejected
    console.log("Promise Settled Up!")
})

//2.
let cleanRoom=function(){  //Promise Inside a function
     return new Promise((resolve,reject)=>{
        if(Math.random<0.5){
            resolve("Room Cleaned")
        }
        else reject("Room Not Cleaned")
     })
}

let removeGarbage=function(message){
    return new Promise((resolve,reject)=>{
        if(Math.random<0.5){
            resolve("Garbage Removed")
        }
        else reject('Garabage not removed')
    })
}
let winPrise=function(message){
    return new Promise((resolve,reject)=>{
        if(Math.random<0.5){
            resolve("Won The Prise")
        }
        else reject("Failed To Get Prise")
    })
}

//Promise Chaining
cleanRoom().then((result)=>{
    removeGarbage(result)
}).then((result)=>{
    return winPrise(result)
}).then((result)=>{
    console.log("Its Result ",result)
}).catch((error)=>{
    console.log(error)
})