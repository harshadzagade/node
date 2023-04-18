const dbConnect = require('./mongodb');

const deleteData = async () =>{
    let data = await dbConnect();

    let result = await data.deleteMany({name:"M40 ProMax"});

    if(result.acknowledged)
    {
        console.log('Data Deleted')
    }

}
deleteData();