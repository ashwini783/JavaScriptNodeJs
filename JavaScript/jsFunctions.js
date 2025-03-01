
function greet(){
    console.log("Hello World")
}
greet()

export const Demo=()=>{
    console.log("In Demo")
}
Demo();

const serveDrink=(drink)=>{
    console.log(drink +" is served")
}
serveDrink("tea")

function addNum(a,b){
    console.log(a+b);
}
addNum(2,3)

function add(a,b){
    return a+b
}
const sum=add(3,4);

function mul(val){
    return val*2
}
const prod=mul(sum);
console.log(prod)