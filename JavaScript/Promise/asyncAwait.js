const { resolve } = require("path");

console.log("Hello")
async function printData(){  //it returns the data wrapped inside promise
    
    return "I Am Promise"
}
let data=printData();
// console.log(data)  output=  Promise { 'I Am Promise' }

//==========
let p1=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise Resolved P1")
    },5000)
})

function resolvePromise1(){
    p1.then((data)=>{
        console.log(data)
    })
    console.log("Hello inside promise1")
}
// resolvePromise1()
let p2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise Resolved P2")
    },10000)
})
//below function will be suspended from CallStack for 10 sec i.e took out of callStack and after some time it will come back again in callStack~
async function resolvePromise2(){ //for 10sec resolvePromise2() function is suspended from callStack so that other function will get executed
     try{
        console.log("Hello World")
        let data1=await p2;
        console.log("from p2")
        console.log(data1)
         let data2=await p1;  // await resolve the promise
         console.log("Hello inside promise2")
         console.log(data2)
     }
     catch(error){
        console.log(error)
     }
}
resolvePromise2()

async function printName(){
    console.log("My Name Is Ashwini")
}
printName()