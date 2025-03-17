let arr = [21, 8, 24, 33, 45, 100, 2];
let evenNum = arr.filter((val) => {
  return val % 2 == 0;
});
console.log(evenNum);
//filter
//1.returns the new array
//2.put in conition
//3.fill up the resultant array
//4.return resultant array
//5.callback-condition
//6.iterate on your array

Array.prototype.myFilter = function (callback) {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {//callback(this[i]) either return true or false         
    resultArr.push(this[i])
         
     }
  }
  return resultArr;
};
let oddElem = arr.myFilter(function (val) {
  return val % 2 != 0;
});
console.log(oddElem);
