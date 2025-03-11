
const fs=require('fs');
const filePath='d:\\FullStackScaler\\JavaScript\\Promise\\f1.txt'
// fs.readFile(filePath,cb)
// function cb(err,data){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("this is file1 data ",data)
//     }
// }

let fileData=fs.promises.readFile( filePath,'utf-8') //here it will handle resolve , reject
fileData.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})