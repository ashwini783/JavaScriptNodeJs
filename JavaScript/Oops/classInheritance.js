
class Car{
    constructor(Brand,Name,Color,TopSpeed,FuelCapacity){
      this.brand=Brand,
      this.name=Name,
      this.color=Color,
      this.topSpeed=TopSpeed
      this.fuelCapacity=FuelCapacity
    }
    drive(){
        console.log(`I am driving ${this.brand} ${this.name}`) //this method is part of prototype,not the part of object
    }
   static compareSpeed(car1,car2){
        if(car1.topSpeed>car2.topSpeed){
            console.log(`${car1.name} is faster than ${car2.name}`)
        }
        else if(car1.topSpeed<car2.topSpeed){
            console.log(`${car2.name} is faster than ${car1.name}`)
        }
        else{
            console.log(`${car1.name} and ${car2.name} have same speed`)
        }
    }
 }
 class ElectricCar extends Car{
       constructor(Brand,Name,Color,TopSpeed,BatteryCapacity,TimeToCharge){
           super(Brand,Name,Color,TopSpeed);
           this.batteryCapacity=BatteryCapacity
           this.timeToCharge=TimeToCharge
       }
 }

 const car1=new Car('Mercedes','G-Wagon','Red','300km/hr')
 
 const car2=new Car('Tata','Punch','Black','200km/hr')
 Car.compareSpeed(car1,car2)
 const evCar=new ElectricCar('Tesla','Models-S','White','200km/hr','100kwh','3hrs')
 console.log(evCar)