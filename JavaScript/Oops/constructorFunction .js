
const pizza1={
    toppings:['cheese','Onions','Capsicum'],
    crust:'thin',
    size:'medium'
}
const pizza2={
    toppings:['cheese','Tomato','Paneer'],
    crust:'thin',
    size:'Big'
}
//here everytime we are creating pizza object to create new pizza eg. pizza1 ,pizza2


//constructor function is used to create object
function Pizza(toppings,crust,size){ //whenever we are going to create constructor function first letter should be capital
   console.log(this) //{}
}
// const p1=new Pizza( )

function Pizza2(Toppings,Crust,Size){ //whenever we are going to create constructor function first letter should be capital
    this.toppings=Toppings,
    this.crust=Crust,
    this.size=Size
    console.log(`A Pizza with ${this.toppings} and crust  ${this.crust}`)
 }
 const p2=new Pizza2(['cheese','onion'],'Thin','Large' )
 console.log(p2)

 function Car(Brand,Name,Color,TopSpeed){
     this.brand=Brand,
     this.name=Name,
     this.colour=Color,
     this.topSpeed=TopSpeed
     this.drive=function(){
        console.log(`I am driving ${this.name} at ${this.topSpeed}`)
     }
 }

  let car1=new Car("Mercedes","G-Wagon","Red","300Km/hr")  //new keyword create empty object{} and the 'this' starts pointing to that empty object
   console.log(car1)
   car1.drive()
