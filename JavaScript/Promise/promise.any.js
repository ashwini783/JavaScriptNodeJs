let p1=function quickResolve(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve("Qickly Resolved") },500)
    })
}

let p2=function resolveSlowly(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("slowly resolved"),2000)
        // setTimeout(()=>reject(new Error("Quick Rejected!")))
    })
}

let p3=function rejectFast(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error("fast rejected")),300)
        // setTimeout(()=>reject(new Error("Quick Rejected!")))
    })
}

let p4=function rejectSlowly(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ reject(new Error("rejected slowly")) },1500)
    })
}

//it will give u first resolved promise
Promise.any([p1(),p2(),p3(),p4()]).then((data)=>{
    console.log("Result: ",data)
}).catch((error)=>console.log(error))