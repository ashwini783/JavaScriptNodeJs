  const mongoose=require('mongoose')
   const productController=require('../controllers/productController')

const productSchema=new mongoose.Schema({
     product_name:{
         type:String,
         required:true,
         unique:true
     },
     product_price:{
        type:Number,
        required:true
     },
     isStock:{
        type:Boolean,
        default:true
     },
     category:{
        type:[String],
        required:true
     },
     password:{
          type:String,
          required:true,
          minLength:8
     },
     confirmPassWord:{
        type:String,
        required:true,
        minLength:8,
        select:false,
        validate:{
            validator:function(){
                return this.password===this.confirmPassWord
            },
            message: "Password and Confirm Password should be same"
        }
     }
    },
     {
        timestamps:true
     }
  )
  
   productSchema.pre("save",function(next){   //prehook
    console.log("pre hooks")
       this.confirmPassWord=undefined;   //after  confirming password no need to save it to DB , hence toook undefined
          next();
    })

   const validCategories=["electronics","fashion","appliences","game"] //
   productSchema.pre("save",function(next){
    console.log("category..")
      const inValidCategories= this.category.filter((category)=>{
          return  !validCategories.includes(category)
      });
           if(inValidCategories.length>0){
                return next(new Error(`Invalid category ${inValidCategories.join(",")}`))
           }
           else{
                 next()
           }
   });


   const ProductModel=mongoose.model("products", productSchema)
   
   module.exports=ProductModel;