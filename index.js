const express = require('express');
// const addListener = require('nodemon');
const app = express();
const middleware = require('./middleware')

const route = express.Router()

app.set('view engine','ejs')
route.use(middleware)

// const middleware_name_any =  (req,resp,next)=>{
//     console.log('middleware')
//     next()
// }

// application middleware
// app.use(middleware_name_any)

//single route middleware
app.get('/profile',middleware,(req,resp)=>{
    const user = {
        name:'waleed'
    }
    resp.render('profile',{user})
})

//group middleware

route.get('/about-us',(req,resp)=>{
    const user = {
        name:'waleed'
    }
    resp.send('about us')
})

route.get('/contact-us',(req,resp)=>{
    const user = {
        name:'waleed'
    }
    resp.send('contact us')
})
app.use('/',route)

app.listen(5000)
