const fs=require('fs')

const sourceFilePath="./dir/file.txt"
const destFilePath="./dir/desti_file.txt"

//creating readable stream from source file
const readStream=fs.createReadStream(sourceFilePath)

//create writebale stream
const writeStream=fs.createWriteStream(destFilePath);

//piping data from read stream to write stream
readStream.pipe(writeStream);

//handle any error, listening error event using on
readStream.on("error",(err)=>{
    console.log("error reading file",err)
})
writeStream.on("error",(err)=>{
    console.log("error writing file",err)
})
writeStream.on("finish",()=>{
    console.log("file copied successfully")
})

