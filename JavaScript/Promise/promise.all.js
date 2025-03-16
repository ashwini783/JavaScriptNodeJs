let p1=function fetchUserData(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ userId:1,userName:"John"})
        },1000)
      })
}

let p2=function fetchUserPosts(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(['Post 1','Post 2','Post 3']))
    })
}
// fetchUserData().then((userData)=>{
//     console.log("user data ",userData)
//     return fetchUserPosts().then((userPost)=>{
//            console.log("user posts ",userPost)
//     })
// }).catch((error)=>console.log('error handling fetching data ',error))

//promise combinators
//1) .all ->  to handle multiple promises==> Promise.all() takes array and it return one single promise to resolve or reject
//if any one promise fails for any reason , no data will be returned , will give error
Promise.all([p1(),p2()]).then((data)=>{
    console.log("User data ",data[0])
    console.log("User posts ",data[1])
}).catch(error=>console.log(error))