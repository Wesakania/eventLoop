let EventEmitter =  require("events");
let http = require("http");

class sales extends EventEmitter{
    constructor(){
        super();
    }
}

let myEmitter =  new sales();

myEmitter.on("newSale",()=>{
    console.log("There is a new sale");
})

myEmitter.on("newSale",()=>{
    console.log("Customer name: Davis")
});
myEmitter.on("newSale",  Stock =>{
    console.log(`There are ${Stock} items in the shelve`)
})

myEmitter.emit("newSale",9);

/////////

let server = http.createServer();
server.on("request",(req,res)=>{
    console.log("Request received");
    console.log(req.url)
    res.end("Request received")
});

server.on("request",(req,res)=>{
    console.log("Another request 😄")
});

server.on("close",()=>{
    console.log("Server closed")
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Waiting for this request....")
});