const express=require('express')
const connectDB=require('./config/db')
const productRouter=require('./routes/productRoutes')
const userRouter=require('./routes/userRoutes')
 const app=express();
 connectDB();
  app.use(express.json());

   
   app.use('/api/products',productRouter)
    app.use('/api/users',userRouter)
   const PORT=3001;
  app.listen(PORT,()=>{
    console.log(`server listening to PORT ${PORT}`)
  })