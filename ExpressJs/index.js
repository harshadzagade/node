const express = require("express");

const app = express();

app.get('', (req, res) => {
    console.log("Data send by Browser", req.query);
    res.send("Welcome, this is home page");
});


app.get('/about', (req, res) => {
    res.send("Welcome, this is About page");
});


// Render HTML
app.get('/website', (req, res)=>{
    res.send(`
    <input type="text" name="fname" placeholder="Enter name" value="${req.query.name}" />
    <button type = "submit" name="submit" value="submit">Submit </button>
    `)
});
app.get('/json', (req, res)=>{
    // res.send({
    //     "name":"harshad",
    //     "age":24
    // });
    res.send([
        {
            "name":"ANIL",
            "age":24
        },
        {
            "name":"Basu",
            "age":24
        }
    ]);
});


// Redirect

app.get("/go", (req, res)=>{
    res.send(`
    <a href="/about">Go to About</a>
    `);
});

app.listen(5000);