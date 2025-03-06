
function printName(name,cb,cb2){
    console.log(name)
    cb(20) //call back function
    cb2("Daniel")
}
function printAge(age){
    console.log(age)
}
function printLastName(lastName){
    console.log(lastName)
}
printName('John',printAge,printLastName);

//calculate circle area diameter and circumferences
let circleRadius=[1,4,6,7,9];
let circumstances=[];
let diameter=[];

function calculateArea(radiusArr){
    let areas=[];
    for(let i=0;i<radiusArr.length;i++) {
        let r=radiusArr[i];
        let area=3.14*r*r
        areas.push(area)
    }
    return areas
}
let areaArray=calculateArea(circleRadius)
console.log(areaArray)

//curcumferences
 function calculateCircumferences(radiusArr){
    let circumferences=[];
    for(let i=0;i<radiusArr.length;i++) {
        let r=radiusArr[i];
        let circumference=2*3.14*r
        circumferences.push(circumference)
    }
    return circumferences
 }
let circumferenceArr=calculateCircumferences(circleRadius)
console.log(circumferenceArr)

//diameter
function calculateDiameter(radiusArr){
    let diameters=[];
    for(let i=0;i<radiusArr.length;i++) {
        let r=radiusArr[i];
        let diameter=2*r
        diameters.push(diameter)
    }
    return diameters
 }
let diameterArr=calculateDiameter(circleRadius)
console.log(diameterArr)

//optimised way to calculate raduis

function calculateDia(radi){
     return 2*radi
}
function calculateCirmfer(radi){
    return 2*radi*radi
}
function calculateAreas(radi){
    return 3.14*radi*radi
}
let radius=[1,2,3,4]
//We can say here calculate function is higher order function, which has calculateDia as callback function
function calculate(radArr,cb){
    let data=[];
    for(let i=0;i<radArr.length;i++){
        data.push(cb(radArr[i]))
    }
    return data
}
let va1=calculate(radius,calculateDia)
let val2=calculate(radius,calculateArea)
console.log(val1)

