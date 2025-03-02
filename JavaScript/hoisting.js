
console.log(a);  //undefined
var a=12;

sayHi(); //Hello
var b;
console.log(b)
b=11
function sayHi(){
    console.log("Hello")
}

//function as variable or function as expression of function as first class citizen
//greet() //TypeError :greet is not a function , because greet is variable hence 
var greet=function(){
    console.log("Hello and Welcome")
}

//greet()  // Hello and Welcome



//Temporal Dead Zone
console.log("d is ",d); //ReferenceError: Cannot access 'd' before initialization
let d=3;
