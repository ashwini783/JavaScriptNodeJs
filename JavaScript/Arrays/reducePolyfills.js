//1.Iterate   over array
//2.return final value(accumulator)
//3.initial value for accumulator
//callback 

let num=[1,2,3,4,5];

  let sum=num.reduce(function(acc,currentVal){  //we initialize the accumulator
             return acc=acc+currentVal
             //0=0+1=1 if we dont pass acc=0 then it will skip this step 0+1, it will directly go to 1+2
             //1=1+2=3
             //3=3+3=6
  },0)
  console.log(sum)

  Array.prototype.myReduce=function(cb,initialValue){
    let accumulator
    let firstIndex
          if(arguments.length==1){ //if we pass only callback function, we dont pass accumulator
            accumulator=this[0]
            firstIndex=1
          }
          else {
            accumulator=initialValue
            firstIndex=0
          }
          for(let i=firstIndex;i<this.length;i++){
            accumulator=cb(accumulator,this[i])
          }
           return accumulator
  }

  let sum1=num.myReduce(function(acc,currentVal){
           return acc=acc+currentVal
  },0)

  console.log(sum1)
  let prod=num.myReduce(function(acc,currentVal){
    return acc=acc*currentVal
})
console.log(prod)