const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnect();
    let update = await data.updateMany(
        { name : "M40"},
        {
            $set: { name:"M40 ProMax"}
        }
    );
    console.warn(update);
}

updateData();