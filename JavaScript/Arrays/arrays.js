
let numsArray=[1,2,3,4,5,'Sonal',true,null];
console.log(numsArray)

//Array Method
let cars=['BMW',"Tata",'Maruti'];
//1.push==> it doesnt return anything, it just return the index where we added element
cars.push('Mahindra');
console.log(cars.push('Toyota'))
console.log(cars)

//2.pop-remove element from the end of array, 
cars.pop();
console.log(cars)
console.log("Element poped out :",cars.pop()) //it returns the removed element

//3. shift-remove element from starting of array and unshift-add the element to the start of array
let carArray=["Mercedes","BMW","Toyota","Maruti"]
carArray.unshift("Tata")
console.log(carArray)
carArray.shift()
console.log(carArray)

//4.includes=>it returns boolean value based on the element exist or not
let hasCar=carArray.includes('Bently')
console.log(hasCar)

//5.indexOf =>  we pass the value and it will provide the index of that value, if no value found it will return -1
let ind=carArray.indexOf("Mercedes")
console.log(ind)

//6. Slice => what part of array u wanted to slice, 2 arguments(start & end index but exclude end index )
let cars2=["BMW","TATA","Mercdes","Mahindra","Alto"]
let sliceElem= cars2.slice(0,3)
console.log(sliceElem)

//7.Splice =>it has start index and count of element to be delete
 let cars3=["BMW","TATA","Mercdes","Mahindra","Alto"]
let spliceElem=cars3.splice(4,1)
console.log(spliceElem)


//push polyfills added
let arr=[12,22,3,4,35,16];
// console.log(arr.push(2))

Array.prototype.myPush=function(ele){
      let n=this.length;
      this[n]=ele
      return this.length
}
console.log(arr.myPush(33))

