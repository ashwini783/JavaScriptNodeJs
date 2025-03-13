
let carPrototype={
    displayInfo:function(){
        return `This is a ${this.brand} ${this.model} and ${this.year} Model`
    },
    drive:function(){
        return `I am driving ${this.brand} ${this.model}`
    }
}
//we can use Object.create() to add methods in constructor level prototype
let car1=Object.create(carPrototype)
car1.brand="BMW"
car1.model="A-100"
car1.year="2010"
console.log(car1.displayInfo())
console.log(car1)

let car2=Object.create(carPrototype)
car2.brand="TATA"
car2.model="Tiago"
car2.year="2015"
console.log(car2.displayInfo())
console.log(car2.drive())