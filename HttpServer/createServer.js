const http=require('http')

const server=http.createServer((req,res)=>{
    //handling incoming request and sending response back to client

    //server is telling what kind of output client can accept
    // res.setHeader('Content-Type','text/plain')
    // res.write("Hello World")
    // res.write("Bye")

    // res.setHeader('Content-Type','text/html')
    // res.write("<html><h1>Hi</h1></html")
    
    res.setHeader("Content-Type","application/json")
    const jsonData={
        message:"Hello World",
        date:new Date()
    }
    const jsonResponse=JSON.stringify(jsonData)
    res.write(jsonResponse)

   
    res.end()
})

const port=3000;
const host='localhost'
server.listen(port,()=>{
    console.log(`Server is running on http://${host}:${port}`)
})