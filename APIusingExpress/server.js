//by mrunal

const express=require('express');
const app=express();

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello From Home Page!")
})
app.get("/about",(req,res)=>{
    res.send("Hello from About Page!")
})
app.get("/product",(req,res)=>{
    res.send("Hello From Product Page! "+req.query.shoe)
})
app.listen(8003,()=>console.log("Server is running on 8003 PORT"))