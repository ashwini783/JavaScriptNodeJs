const pikaChu={
    firstName:"Ashwini",
    lastName:"Avhad",
    getMyName:function(){
      return this.firstName+" "+this.lastName;
    }
}
const pockName=function(){ // here updating the context of pockName with value of pickChu object
    console.log("My Full Name Is",this.getMyName())
}
const callMe=pockName.bind(pikaChu)  //bind method returns the new method we can call it later
callMe();