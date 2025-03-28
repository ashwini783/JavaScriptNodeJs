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
//but when we use writeFile method it will override old data by new so its better to use append() method
fs.writeFile('f2.txt',str,'utf8',(err)=>{  //writing utf8(encoding) is optional
     if(err){
         console.log(err);
     }
     else{
         console.log('file created successfully')
     }
})

//appendFile() persist the old data in file
fs.appendFile('f2.txt'," Hello Added Apend Method",(err)=>{
    if(err){
        console.log("error writing data into file")
    }
    else{
        console.log("file appended successfully!")
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
//To delete the file
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
//to check if the given directory or file exist or not
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
console.log(fileName) //file.txt

//it gaves u extension like .txt
const extName=path.extname("./dir/file.txt")
console.log(extName)

const normalizePath=path.normalize("/path/to/../file.txt")
console.log(normalizePath)

//copying file from one folder to another folder

console.log(__dirname) //it will give u the directory name in which u are working
console.log(__filename)