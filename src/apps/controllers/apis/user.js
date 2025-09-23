const UserModel = require("../../models/user");
exports.findAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json({
            status: "success",
            message: "Get user successful",
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
            error: error.message,
        });
    }
}