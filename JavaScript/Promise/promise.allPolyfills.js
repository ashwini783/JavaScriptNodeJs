

Promise.myAll=function(values){
    const promise=new Promise(function(resolve,reject){  //promise.all returns a single promise so we have created promise here
        // if(Array.isArray(values)){
            let result=[] //used to store the resolved value
            let total=0;
            values.forEach(function(item,index){
                Promise.resolve(item).then((res)=>{
                    result[index]=res
                    total++;
                    if(total===values.length){  //resolved promises==to incoming promise array length
                         resolve(result)
                    }
                }).catch((err)=>{
                    reject(err)
                })
            })

        // }
        // else{
        //     console.error('An array has not been passed!')
        // }
    })
    return promise

}
let promise1=[
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]
Promise.myAll(promise1).then((results)=>{
    console.log("Result is ",results)
}).catch((error)=>{
    console.log('Error ',error)
})