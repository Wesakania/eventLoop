let fs = require("fs");
let server =  require("http"). createServer();

server.on("request",(req,res)=>{
    //Solution 1
    //fs.readFile("test-file.txt",(err,data)=>{
       // if(err)console.log(err);
        //res.end(data);
    //});
    //Solutiin 2 Streams
   // let readable = fs.createReadStream("test-file.txt")
   // readable.on("data", chunk =>{
      //  res.write(chunk);
    //});
    //readable.on("end",()=>{
     //   res.end();
   // });
   // readable.on("error",err =>{
    //    console.log(err);
    //    res.statusCode = 500;
   //     res.end("File not found");
  //  });
    /// Solution 3
    let readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Server running on port 8000")
})