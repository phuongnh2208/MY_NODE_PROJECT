const mongoose = require('../../common/init.mongo')();

const CategorySchema = new mongoose.Schema(
    {
        _id: { 
            type: mongoose.Schema.Types.ObjectId, 
            required: true 
        },
        name: { 
            type: String, 
            required: true 
        }
    },
    { timestamps: true }
);

const Category = mongoose.model('Category', CategorySchema, "categories");
module.exports = Category;