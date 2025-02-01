const express=require('express')
const mongoose=require('mongoose')
const dbUrl='mongodb+srv://ashwiniavhad8:Ca6mFxOS99N0VPuv@cluster0.khztu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    

const app=express()
  app.use(express.json())
mongoose.connect(dbUrl).then(()=>{
    console.log("connected to Db")
}).catch((err)=>{
    console.log(err)
})


  //schema

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
        type:String,
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

  const ProductModel=mongoose.model("products", productSchema) //'product' name of schema in db
    
  app.post('/api/products',async(req,res)=>{
    try{
        const body=req.body;

    const product = await ProductModel.create({
        product_name:body.product_name,
        product_price:body.product_price,
        category:body.category,
        isStock:body.isStock,
        password:body.password,
        confirmPassWord:body.confirmPassWord
    })
    console.log(product)
    res.status(200).json({message:"product created",product})
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
  })
  app.get('/api/products',async(req,res)=>{
     try{
        const products = await ProductModel.find();
        //   const products = await ProductModel.find({isStock:true});  if we want items os isStock true
          return res.status(200).json({products})
     } 
     catch(err){
        return res.status(400).json({message:err.message})
     }
  })

  app.get('/api/products/:id',async(req,res)=>{
    const id=req.params.id;
    const product= await ProductModel.findById(id);
    return res.status(200).json({product})
  })

  // updating
  app.put('/api/products:id',async(req,res)=>{
      await ProductModel.findByIdAndUpdate(req.params.id,req.body)

      return res.status(200).json({message:"Prduct Updated"})
  })

  app.delete('/api/product/:id',async(req, res)=>{
      await ProductModel.findByIdAndDelete(req.params.id)

      return res.status(200).json({message:"Item deleted Successfully"})
  })

   const PORT=8000
    app.listen(PORT,()=>{
        console.log(`server started on port ${PORT}`)
    })

    //idempotency bug issue ubereats vala