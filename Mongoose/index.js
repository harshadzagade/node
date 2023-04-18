const mongoose = require('mongoose');


// Validation for Keys
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number
});


const SaveInDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecomm");
    const ProductModel = mongoose.model('products', productSchema);
    let data = new ProductModel({ name: "ZPro1", brand: "Oppo", price: 500 });
    let result = await data.save();
    console.log(result);

}

const updateInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        { name: "ZPro1" },
        { $set: { name: "ZMaX" } }
    )
    console.log(data);
}

updateInDB()