
const ProductModel=require('../models/product')

  const createProduct=async(req,res)=>{
    try{
        const body=req.body;
        console.log("body..",body)
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
  }

  const getAllProducts=async(req,res)=>{
    try{
       const products = await ProductModel.find();
       //   const products = await ProductModel.find({isStock:true});  if we want items os isStock true
         return res.status(200).json({products})
    } 
    catch(err){
       return res.status(400).json({message:err.message})
    }
 }

 const getProductById=async(req,res)=>{
    const id=req.params.id;
    const product= await ProductModel.findById(id);
    return res.status(200).json({product})
  }

  const deleteProductById=async(req, res)=>{
    await ProductModel.findByIdAndDelete(req.params.id)

    return res.status(200).json({message:"Item deleted Successfully"})
   }
  
   const updateProductById= async(req,res)=>{
    await ProductModel.findByIdAndUpdate(req.params.id,req.body)

    return res.status(200).json({message:"Prduct Updated"})
   }
   module.exports={
     createProduct,
     getProductById,
     getAllProducts,
     deleteProductById,
     updateProductById
   }