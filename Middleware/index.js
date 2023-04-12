const express = require('express');
const reqFilter = require('./middleware');
const route = express.Router();

const app = express();


// const reqFilter = (req, res, next) =>{
//     if(!req.query.age)
//     {
//         res.send("Please provide age")
//     }
//     else  if(req.query.age < 18)
//     {
//         res.send("You cannot access this page")
//     }
//     else{
//         next();
//     }
    
// }

// app.use(reqFilter)

route.use(reqFilter)

app.get('/',(req,res)=>{
    res.send("Hello Sender")
})

route.get('/users', (req, res)=>{
    res.send("Welcome Users");
})
route.get('/about', (req, res)=>{
    res.send("About Page");
})
route.get('/contact', (req, res)=>{
    res.send("Contact page");
})

app.use('/',route);

app.listen(5000)