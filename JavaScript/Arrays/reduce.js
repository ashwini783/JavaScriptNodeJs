let numsArr=[1,2,3,4,5];

let sum=numsArr.reduce((num,val)=>num=val+num,0) //initially num=0
console.log(sum)

let prod=numsArr.reduce((num,val)=>num=val*num,1);  //0 and 1 are initialiser value
console.log(prod)