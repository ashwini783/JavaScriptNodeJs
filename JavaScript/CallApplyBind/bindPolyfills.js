let car1={
    name:'Mercedes',
    color:'Red',
    drive:function(speed){
        return `I am driving a ${this.color} ${this.name} ${speed}km/hr`
    }
}

let car2={
    name:'BMW',
    color:'White'
}
// let driveCar=car1.drive.bind(car2)
// console.log(driveCar(200))   //after binding also we can pass the parameter
// let driveCar=car1.drive.bind(car2,'200') //while binding also we can pass the parameter
// console.log(driveCar())


//Bind Polyfills
Function.prototype.myBind=function(context={},...args){
      if(typeof this!='function'){
        throw new Error(this,' cant be bounded')
      }
      context.myFn=this  //drive
      return function(...newAargs){
        return context.myFn(...args,newAargs)
      }
}
//   car2{  //for reference
    //     name:'BMW',
    //     color:'white',
    //     myFn:drive
    //   }

let newFn=car1.drive.myBind(car2)
console.log(car2)
let val=newFn('300')
console.log(val)


