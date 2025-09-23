const mongoose = require('../../common/init.mongo')();

const CommentSchema = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    }, { timestamps: true }
);

const CommentModel = mongoose.model('Comment', CommentSchema, "comments");
module.exports = CommentModel;