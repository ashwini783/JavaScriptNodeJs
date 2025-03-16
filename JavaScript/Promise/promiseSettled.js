let p1=function fetchUserData(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve({ userId:1,userName:"John"})
      },1000)
    })
}

let p2=function fetchUserPosts(){
  return new Promise((resolve,reject)=>{
    //   setTimeout(()=>resolve(['Post 1','Post 2','Post 3']))
      setTimeout(()=>reject("cant fetch posts"))
  })
}

//Promise.allSettled() will give u complete output ,whether it is resolved or rejected and it gives u the status also
Promise.allSettled([p1(),p2()]).then((data)=>{
    console.log("user data ",data[0])
    console.log("user post ",data[1])
}).catch((error)=>{
    console.log(error)
})