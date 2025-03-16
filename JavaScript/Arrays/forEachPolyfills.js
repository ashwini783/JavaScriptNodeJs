let arr=[1,2,3,4,5]
//it iterates the array, but it doesn't return anything
//map returns new array and forEach doesn't return array
arr.forEach((val)=>{
    console.log(val)
})

//polyfills for forEach

Array.prototype.myForEach=function(callback){
       for(let i=0;i<this.length;i++){
            callback(this[i],i)
       }
}
arr.myForEach(function(val,index){
     console.log(val*val," index is ",index)
})