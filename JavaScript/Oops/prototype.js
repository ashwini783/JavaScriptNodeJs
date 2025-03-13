const person={
    name:'John',
    age:24
}
//object has hasOwnProperty prototypical inbuilt method
let doesExist=person.hasOwnProperty('name') //it returns true or false i.e it has that proprty exit inside object or not
console.log(doesExist) //
console.log(person)


function Car(Brand,Model,Year){
    this.brand=Brand
    this.model=Model
    this.year=Year
//we dont need this function as part of our constructor function, we neeed this as part of constructor prototype to avoid repeatation 
    this.displayInfo=function(){
        return `This is a ${this.brand} ${this .model} ${this.year} model`
    }
}
let car1=new Car("Tata","Punch",'2021')
let car2=new Car("Mercedes","X-6",'2018')
console.log(car1.displayInfo())
console.log(car2.displayInfo())
console.log(car1)
console.log(car2)


function Car1(Brand,Model,Year){
    this.brand=Brand
    this.model=Model
    this.year=Year
}
//we will attach displayInfo() method to constructor level prototype
Car1.prototype.displayInfo=function(){
    return `This is a ${this.brand} ${this .model} ${this.year} model`
}
let car11=new Car1("Tata","Altroz",'2021')
let car22=new Car1("Mercedes","X-6",'2018')
console.log(car11)
console.log(car22)
console.log(car11.displayInfo()) //constructor level prototype method
console.log(car11.hasOwnProperty('brand')) //global level prototype method

//here its not good practice to manipulate global level prototype, becuase if we create another object then this print() method will be accessible to that object too
Car1.prototype.__proto__.print=function(){ //prototypical chaining
    console.log(`Hello and Welcome To ${this.brand}`)
}
console.log(car11.print())
// console.log(Car1.prototype.__proto__.__proto__) //null

function Animal(){

}
let animal1=new Animal()
console.log(animal1.print())
 
