const express = require('express');

require('./config');
const products = require('./product');

const app = express();

app.use(express.json());


app.get("/search/:key", async (req, res)=>{
    let data = await products.findOne({
        "$or":[
            { "name":{$regex:req.params.key}},
            { "brand":{$regex:req.params.key}},
            { "price":{$regex:req.params.key}}
        ]
    });

    res.send(data);
})





app.listen(5000);