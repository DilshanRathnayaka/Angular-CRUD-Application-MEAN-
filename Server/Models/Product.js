const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    disc:{
        type:String,
        required:true
    }
},
{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);