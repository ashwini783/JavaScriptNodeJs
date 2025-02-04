 const express=require('express')
  
 const productRouter=express.Router();  // this product router object  will be responcible for managing product related entity
  
 const {createProduct,
    getProductById,
    getAllProducts,
    deleteProductById,
    updateProductById} =require('../controllers/productController');

    productRouter.post('/',createProduct)  //  /api/products
    productRouter.get('/:id',getProductById)
    productRouter.get('/',getAllProducts)
    productRouter.delete('/:id',deleteProductById);
    productRouter.put('/:id',updateProductById)

    module.exports=productRouter;