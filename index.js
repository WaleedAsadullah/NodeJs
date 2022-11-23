const app = require('./app.js');

// console.log(app);
// console.log("su2b");

const fs = require('fs');
const  http = require('http');

// fs.writeFileSync('first/first.txt',"Hello");

// const fs2 = require('fs').writeFileSync;

// fs2('first2.txt',"Hello");



// http.createServer((req,resp)=>{
//     resp.write("Hello world");
//     resp.end;
// }).listen(4800);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//   }).listen(8080);


// http.createServer((req,resp)=>{
//   resp.writeHead(200,{'Content-Type': 'application/json'});
//   resp.write(JSON.stringify({name:'waleed'}))
// }).listen(8080)


// get values from text field
// console.log(process.argv);
let a = 10
let b = 20;

setTimeout(()=>{
    b =30;
},100)

console.log(a+b);




let waitdata = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },100)
})
waitdata.then((data)=>{
    b = data;
    console.log(a+data);
})

