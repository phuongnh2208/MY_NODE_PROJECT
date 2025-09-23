const mongoose = require('../../common/init.mongo')();

const UserSchema = new mongoose.Schema(
    {
        _id: { 
            type: mongoose.Schema.Types.ObjectId, 
            required: true 
        },
        email: { 
            type: String, 
            required: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        role: { 
            type: String, 
            required: true 
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model('User', UserSchema, "users");
module.exports = UserModel;