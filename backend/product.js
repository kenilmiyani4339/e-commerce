const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    newprice: { type: Number, required: true },
    oldprice: Number,
    description: String,
    // image: String 
});

module.exports = mongoose.model("productadds", productSchema);
