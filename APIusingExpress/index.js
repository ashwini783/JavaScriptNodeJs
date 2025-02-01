const express=require('express');

//create express application
 const app=express();

   app.use(express.json()) //parsing application/json data is made available in req.body

//    app.use(express.static('public'))  //public is folder,express.static it is middleware and used to search static file like html, css from client side
//    app.use(express.urlencoded({extended:true})) //used when we are dealing with form data
   const loggerMiddleware=(req,res,next)=>{ //next is used for to move controll to next handler or next
            console.log(`logged url: ${req.url} and method is: ${req.method} and time is ${new Date().toISOString()}`)                                     //or next middleware in request rsponse cycle
             next();
   }
    // app.use(loggerMiddleware); //it will use middleware for all calls

    app.get('/home',loggerMiddleware,(req,res)=>{ // we can have logger for specific call also
        res.send('home page with middleware')
    })

//define a route
app.get('/',(req,res)=>{ //when client sends request, everything will come in req object like headers and URL
     res.send("Hello Express")
})

  app.get('/about',(req,res)=>{
   res.send("this is about page")
  })
   
  app.post('/data',(req,res)=>{
      console.log(req.body)
      res.send('received post request')
  })

  let users=[
      {id:1,name:"Ashwini"},
      {id:2,name:"Neha"}
  ]
  app.post('/users',(req,res)=>{
      const newUser=req.body
      const userId=users.length+1;
      newUser.id=userId;
      users.push(newUser);
      res.status(201).json({message:"user created",users:newUser})
      console.log(users)
  })

   app.delete('/users/:id',(req,res)=>{ //id is as route parameter
        const userID=req.params.id;
        //find user By id
        const userIndex=users.findIndex((user)=>user.id==userID)
         
        if(userIndex==-1){
            return res.status(404).json({message:"user not found"})
        }
        users.splice(userIndex,1)
        res.json({message:"user is deleted"})
        
  })

  app.get('/search',(req,res)=>{
      console.log("query parameter ",req.query)
      res.send("Search Page")
  })

  app.get('/users',(req,res)=>{
      res.json(users)  //sending all users back to Client i.e postman response
  })

app.use((req,res)=>{ //if invalid path come
    res.status(404).send("page not fount")
})
    const PORT=3000;
  app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
   })
   //Ca6mFxOS99N0VPuv
