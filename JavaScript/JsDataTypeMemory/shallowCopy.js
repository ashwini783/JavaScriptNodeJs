let zoo1={
  name:'Amazing Zoo',
  location:'Australia',
  animals:[
    {species:'Lion',favouriteTreat:'Meat'},
    {species:'Panda',favouriteTreat:'Leaves'}
]
}
// let zoo2=zoo1  //wrong way of making copy
//shallow copy
//spread operator creates different copy for your object
let zoo1shallowCopy={...zoo1} 
//shallow copy handles the top layer only, 
zoo1shallowCopy.location="Kerala India"
zoo1.animals[1].species="Elephant" //shallow copy only handles the first layer of your object, it cant handle nested properties
// console.log(zoo1)
// console.log(zoo1shallowCopy)

//deep copy
let zooString=JSON.stringify(zoo1) //now this is separate string
console.log(zooString)
let deepCopy=JSON.parse(zooString) //JSON.parse will again create separate object,new reference for object created
deepCopy.animals[0].species="Tiger"; //nothing changed in original object
deepCopy.location="Kerala India"
let zoo2=zoo1
console.log(zoo1)
console.log(deepCopy)
console.log(zoo1===zoo2) //true
console.log(zoo1===zoo1shallowCopy) //false
console.log(zoo1.animals===zoo1shallowCopy.animals) //true
console.log(zoo1===deepCopy) //false
console.log(zoo1.animals===deepCopy.animals) //false