const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    createdAt:Date,
    updatedAt:Date
})

userSchema.pre("save",function(next){  //before it is getting saved to DB
    console.log("pre hooks")  
    const now=new Date();
      this.updatedAt=now;

      if(!this.createdAt){ //if createdAt doesnt exist  add the current time to that, it will be populated once
         this.createdAt=now;
      }
      next()
})

userSchema.post("save",function(next){
    console.log(`User ${this.name} is saved`)
    // next();
})

const User=mongoose.model("User",userSchema);

module.exports=User;