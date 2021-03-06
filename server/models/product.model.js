const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required."
const minErrMsg = "{PATH} must be at least {MINLENGTH} characters."

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, requiredErrMsg],
            minLength: [2, minErrMsg],
        },
        price: {
            type: Number,
            required: [true, requiredErrMsg],
            min: [0, "{PATH} must be at least 0"],
        },
        category: {
            type: String,
            required: [true, requiredErrMsg],
            minLength: [2, minErrMsg],
        },
        brand: {
            type: String,
            required: [true, requiredErrMsg],
        },
        imgUrl: {
            type: String,
            required: [true, requiredErrMsg],
        },
        description: {
            type: String,
            required: [false],
            minLength: [5, minErrMsg],
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;