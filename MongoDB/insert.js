const dbConnect = require('./mongodb');

const insert = async () =>{
    const db = await dbConnect();
    const result = db.insertOne(
        {name:"M40", brand:"Samsung", price:4000}
        )
    
}

insert();