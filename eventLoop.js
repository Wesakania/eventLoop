let fs = require("fs");
let crypto = require("crypto");
let start = Date.now();

process.env.UV_THREADPOOL_SIZE =2;
setTimeout(()=>console.log("The timer 1 is fiinished"),0);
setImmediate(()=>console.log("The immediate 1 is finished"))

fs.readFile("test-file.txt", ()=>{
   console.log("I/O is finished")
   console.log("................")

   setTimeout(()=>console.log("The timer 2 is fiinished"),0);
   setTimeout(()=>console.log("The timer 3 is fiinished"),3000);
setImmediate(()=>console.log("The immediate 2 is finished"))

process.nextTick(()=>console.log("process.nextTick"));

crypto.pbkdf2("password", "salt",100000, 1024, "sha512",()=>{
    console.log(Date.now()-start,"Password is encrypted");
});
crypto.pbkdf2("password", "salt",100000, 1024, "sha512",()=>{
    console.log(Date.now()-start,"Password is encrypted");
});
crypto.pbkdf2("password", "salt",100000, 1024, "sha512",()=>{
    console.log(Date.now()-start,"Password is encrypted");
});
crypto.pbkdf2("password", "salt",100000, 1024, "sha512",()=>{
    console.log(Date.now()-start,"Password is encrypted");
});
});

console.log("Hello from the top-level code");