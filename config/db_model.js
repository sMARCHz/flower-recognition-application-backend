const mongoose = require('mongoose');
const Schema = mongoose.Schema
const productSchema = new Schema({
    img: { 
        data: Buffer, contentType: String, uri:  String
    },
    userid: {
        type: Number,
        trim: true,
        required: true,
    }
})
const ProductModel = mongoose.model('takepic', productSchema);
module.exports = ProductModel;
//mongodb+srv://sMARTz:<password>@flower1-b6hxe.mongodb.net/test?retryWrites=true&w=majority