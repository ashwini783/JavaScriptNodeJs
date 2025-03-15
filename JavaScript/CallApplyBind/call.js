const person1={
    name:'Komal',
    age:25,
    printNameAge:function(){
      console.log(`My Name is ${this.name} and age is ${this.age}`)
    }
  }
  const person2={
    name:'Neha',
    age:23,
    printNameAge:function(){
      console.log(`My Name is ${this.name} and age is ${this.age}`)
    }
  }
  //here person1 and person2 have printNameAge() methods , so we can avoid it using call method
//  person1.printNameAge()
//  person2.printNameAge()

 //for person2 it can borrow method from person1, 
 //borrowing means taking something, using it and then returning it
 //we can say it as function borrowing of method borrowing
  

 const person11={
    name:'Sonal',
    age:25,
    //only one instance of printNameAge() created and other objects can use this method
    printNameAge:function(location,occupation){
      console.log(`My Name is ${this.name} and age is ${this.age} ,I live in ${location} and I am ${occupation}`)
    }
  }
  const person22={
    name:'Jem',
    age:23
  }
  console.log(person11);
   console.log(person22)
   person11.printNameAge("mumbai",'Tester')
   person11.printNameAge.call(person22,'Pune',"Developer")  //borrowed for person22 from person11

   //another way of calling global method using call() method when we want to borrow global method
   function displayInfo(location,occupation){
    console.log(`My Name is ${this.name} and age is ${this.age} ,I live in ${location} and I am ${occupation}`)
  }
  const myInfo={
    name:"John",
    age:22
  }
  displayInfo.call(myInfo,"Delhi","Engineer")