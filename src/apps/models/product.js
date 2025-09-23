const { text } = require('express');

const mongoose = require('../../common/init.mongo')();

const ProductSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            text: true,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        accessories: {
            type: String,
            required: true
        },
        promotion: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        },
        is_stock: {
            type: Boolean,
            default: true
        },
        is_featured: {
            type: Boolean,
            default: true
        },
    },
    { timestamps: true }
);

const ProductModel = mongoose.model('Product', ProductSchema, "products");
module.exports = ProductModel;