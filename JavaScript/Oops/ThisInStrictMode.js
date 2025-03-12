'use strict'
//use strict to make your code more secure and more strict and it saves you from lot of bad practices
// a=3;  
// console.log(a) //ReferenceError: a is not defined , if we dont use 'use strict' it will print a=3

//1. Globally-gives us Window object
console.log(this)

//2.Inside Function it gives undefined
function getValue(){
    console.log(this)
}
getValue()

//3.Object=It gives u complete object
let obj1={
    name:'Ash',
    age:28,
    fn:function(){
        console.log(this)
    }
}
obj1.fn()

//4. Function inside function-it gives u undefined
let obj2={
    name:"komal",
    age:24,
    fn:function(){
        function fn2(){
            console.log(this)
        }
        fn2()
    }
}
obj2.fn()