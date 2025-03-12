//1.Globally=> gives u window object
console.log(this)

//2.Function=> Gives Window object
function getValue(){
    console.log(this)
}
getValue()

//3.Object=> this keyword inside object method gives you complete object
let obj1={  //when we create function inside object or class then we called it as method
    name:"Ashwini",
    age:28,
    fn:function(){
      console.log(this)
    }
}
obj1.fn()

//4. Function inside method==Gives Window Object
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