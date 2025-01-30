const fs=require('fs')  //file system module , common js module
// import fs from 'fs'; //ES6 moduele

fs.readFile('f1.txt', 'utf-8',(err,data)=>{ // error first callBack
      if(err){
          console.log(err);
          return
      }
      else{
          console.log(data)
      }
})

const str='this is new file'
fs.writeFile('f2.txt',str,'utf8',(err)=>{  //writing utf8(encoding) is optional
     if(err){
         console.log(err);
     }
     else{
         console.log('file created successfully')
     }
})

const data=fs.readFileSync('f3.txt','utf8'); //sync will blocking operation
console.log(data) //syn operatin will carried out first befor synchronous operation

fs.rename('f3.txt','new_f4.txt',(err)=>{
      if(err){
          console.log(err)
      }
      else{
          console.log("file renamed successfully")
      }
})

fs.unlink('f5.txt',(err)=>{
    if(err){
       console.log(err)
       return
    }
    else{
        console.log('file deleted successfully')
    }
})

fs.stat('f1.txt',(err,stats)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log(stats.size);
    console.log(stats.isDirectory())
    console.log(stats.isFile())
})

const directoryName='my_directory'
fs.mkdir(directoryName,(err)=>{
   if(err){
       console.log(err)
   }
   console.log("directory created successfully")
})
const directoryPath='./my_directory'
if(fs.existsSync(directoryPath)){
    console.log("directory exist")
}
else{
    console.log('directory doesnt exist')
}

//Path

const path=require('path')
//this will join multiple path segment
const fullPath=path.join('folder','subFolder','file.txt')
console.log(fullPath) //  folder\subFolder\file.txt

const absolutePath=path.resolve('folder','subFolder','file.txt')// it will give u absolute path from root directory
console.log(absolutePath)  //   D:\FullStackScaler\fileHandling\folder\subFolder\file.txt

const fileName=path.basename("./dir/file.txt")
console.log(fileName)

const extName=path.extname("./dir/file.txt")
console.log(extName)

const normalizePath=path.normalize("/path/to/../file.txt")
console.log(normalizePath)

//copying file from one folder to another folder