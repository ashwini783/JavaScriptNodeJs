
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
 }
 class ElectricCar extends Car{
       constructor(Brand,Name,Color,TopSpeed,BatteryCapacity,TimeToCharge){
           super(Brand,Name,Color,TopSpeed);
           this.batteryCapacity=BatteryCapacity
           this.timeToCharge=TimeToCharge
       }
 }

 const car1=new Car('Mercedes','G-Wagon','Red','300km/hr')
 const evCar=new ElectricCar('Tesla','Models-S','White','200km/hr','100kwh','3hrs')
 console.log(evCar)