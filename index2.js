// const app = require('./app.js');
const express = require('express')
const path = require('path')
const app = express();

// html page use method
const publicPath = path.join(__dirname,'public')
// app.use(express.static(publicPath))

app.set('view engine','ejs')

// console.log(app);
// console.log("su2b");

// const fs = require('fs');
// const  http = require('http');
// const { a } = require('./app.js');

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
// let a = 10
// let b = 20;

// setTimeout(()=>{
//     b =30;
// },100)

// console.log(a+b);




// let waitdata = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(a);
//     },1000)
// })
// waitdata.then((data)=>{
//     b = data;
//     console.log(a+data);
// })




// route
app.get('',(req,resp)=>{
    resp.send(req.query);
})

app.get('/html',(req,resp)=>{
    resp.sendFile(`${publicPath}/home.html`);
})

app.get('/profile',(req,resp)=>{
    const user = {
        name:'waleed'
    }
    resp.render('profile',{user});
})

app.get('*',(req,resp)=>{
    resp.send("404");
})




app.listen(5000)
