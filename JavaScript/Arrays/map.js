
let nums=[1,2,3,4]
  //imperative approach
  function calculateSquare(arr){
    let squares=[];
    for(let i=0;i<arr.length;i++){
        squares.push(arr[i]*arr[i])
    }
    return squares
  }
  let finalSquare=calculateSquare(nums);
  console.log(finalSquare)

  //calculate squares of all of these numbersand store them in new array
//its declarative approach
 let squareArr=[];
 function getSquare(num){
    return num*num;
 }
//  let squareMap=nums.map(getSquare) 
let squareMap=nums.map((num)=>num*num)
 console.log(squareMap)
 //1.map method used only for arrays
 //2.map has inbuilt loop
 //3.it takes a call back
 //4.map method returns array