

let nums=[1,34,36,57,33,22,56,78,9]
// Returns the elements of an array that meet the condition specified in a callback function.
let evenNum=nums.filter((num)=>num%2==0) //return type is array
console.log(evenNum)

let deositArr=[1000,3000,1500,-1999,-2000,3300]
let deposit=deositArr.filter((val)=>val>0)
console.log(deposit)