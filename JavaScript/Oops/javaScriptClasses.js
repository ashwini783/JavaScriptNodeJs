//having classes are better than constructor function
 class Car{
    constructor(Brand,Name,Color,TopSpeed){
      this.brand=Brand,
      this.name=Name,
      this.color=Color,
      this.topSpeed=TopSpeed
    }
    drive(){
        console.log(`I am driving ${this.brand} ${this.name}`) //this method is part of prototype,not the part of object
    }
 }
 
 let car1=new Car("TATA","Tiago","White","300km/hr")
 let car2=new Car("Mahindra","XUV","Black","200km/hr")
 //here whenever we create constructor no need to pass method in every object unlike constructor function
 //for every created object , prototype is bydefault there. Prototype is shared entity
 console.log(car1)
 car1.drive()
 console.log(car2)
 car2.drive()
 