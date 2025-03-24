//to copy file from one folder to another folder we require source file path and destination file path
const path=require('path')
const fs=require('fs')
console.log("directory name ",__dirname)
// console.log(__filename)

let sourceFilePath = path.join(__dirname, 'f2.txt');
let destFolder = path.join(__dirname, 'my_directory');
if (fs.existsSync(sourceFilePath)) {
    console.log("Source file exists!");
} else {
    console.log("Source file does NOT exist at:", sourceFilePath);
}
if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
    console.log("Destination folder created!");
}

console.log('Source Path:', sourceFilePath);
console.log('Destination Folder:', destFolder);

let baseName=path.basename(sourceFilePath)
console.log(baseName) //f2.txt

let destPath=path.join(destFolder,baseName)
console.log(destPath)   //fileHandling\my_directory\f2.txt

fs.copyFileSync(sourceFilePath,destPath)
console.log("file copied")