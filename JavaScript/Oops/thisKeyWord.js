//Browser
//1.'This' Globally=> a).gives u window object on browser. b)gives u {} empty object
console.log(this)

//2.'This' Inside Function=> a).Gives Window object on browser. b) Gives global object on on Nodejs 
function getValue(){
    console.log(this)
}
getValue()

//3.Object=>a) this keyword inside object method gives you complete object on Browser and in NodeJs env
let obj1={  //when we create function inside object or class then we called it as method
    name:"Ashwini",
    age:28,
    fn:function(){ // here 'this' will pointing to parent i.e obj1
      console.log(this)
    }
}
obj1.fn()

//4. Function inside method==a)Gives Window Object on Browser b)Global Object in Node Js env
let obj2={  //when we create function inside object or class then we called it as method
    name:"komal",
    age:26,
    fn:function(){
      function fn2(){ //this function behaves as traditional function
        console.log(this)
      }
      fn2()
    }
}
obj2.fn()

//NodeJs
//1.Globally
console.log(this) //{} empty object