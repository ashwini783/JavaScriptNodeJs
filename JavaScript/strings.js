//string is sequence of character

//1. replace
let str1='Hello World Hello'
let str2='GoodBy World'
let txt1=str1.replace("Hello","Namaste")  //it doesnt change original string , it return new string
console.log(txt1)

//2.toLowerCase(),toUpperCase()
let str3="HELLO"
let str4='world'
let lowerTxt=str3.toLowerCase()
console.log(lowerTxt)
let uppTxt=str4.toUpperCase();
console.log(uppTxt)

//3.concat
let concatStr=str3.concat(" "+str4);
console.log(concatStr)

//
let str="Hello World"
let splitStr=str.split(" ") //["Hello", "World"]
console.log(splitStr)
 let rev=str.split(" ").reverse().join(" ");
 console.log(rev)
