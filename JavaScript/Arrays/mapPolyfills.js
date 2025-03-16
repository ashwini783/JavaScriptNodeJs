
let arr=[1,2,3,4,5]

// square the number
let sqrArr = arr.map((val)=>{
    return val*val
})
// console.log(sqrArr)


//suppose consider we dont have map method , we have to write our own map method
//map behaviour-1.iterate over the array 2.perform some opertion 3.returns new array
// console.log(arr)
// console.log(Array.prototype)

Array.prototype.myMap = function(callback) {;
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
     //1.create new array
    let resultArray = [];
    // console.log("this is array ",this) this keyword points to the array
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i]));
    }
    return resultArray;
};

// let arr = [1, 2, 3, 4, 5];
let square = arr.myMap(function(val) {
    return val * val;
});
console.log(square);
let cubes = arr.myMap(function(val) {
    return val * val*val;
});
console.log(cubes)
