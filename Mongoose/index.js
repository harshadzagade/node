const express = require('express');

require('./config');
const products = require('./product');

const app = express();

app.use(express.json());

app.post("/create", async (req, res) =>{
    let data = new products(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});

app.get("/", async (req,res)=>{
    let data =await products.find();
    res.send(data);
});

app.get("/:id", async (req, res)=>{
    let data = await products.findById(req.params.id);
    res.send(data);
})


app.delete("/delete/:_id", async (req, res)=>{
    let data = await products.deleteOne(req.params);
    res.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await products.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.listen(5000);