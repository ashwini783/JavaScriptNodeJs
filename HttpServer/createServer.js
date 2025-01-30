const http=require('http')

const server=http.createServer((req,res)=>{
    //handling incoming request and sending response back to client

    //server is telling what kind of output client can accept
    res.setHeader('Content-Type','text/plain')
    // res.setHeader('Content-Type','text/html')
    // res.write("<html><h1>Hi</h1></html")
    res.write("Hello World")
    res.write("Bye")
    res.end()
})

const port=3000;
const host='localhost'
server.listen(port,()=>{
    console.log(`Server is running on http://${host}:${port}`)
})