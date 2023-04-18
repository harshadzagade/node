const express = require('express');
const dbConnect = require('../MongoDB/mongodb');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
});


app.post('/insert', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
    console.log(result);
})


app.put('/update', async (req, res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )

    res.send(result);
})


app.delete("/delete/:id", async(req, res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result);
})


app.listen(5000);