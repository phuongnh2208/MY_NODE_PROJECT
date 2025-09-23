const ProductModel = require("../../models/product");
const paginate = require("../../../libs/paginate")
exports.findAll = async (req,res) => {
    try {
        // Sản phẩm nổi bật
        const query = {};
        if (req.query.is_featured) {
            query.is_featured = req.query.is_featured;
        };
        // Sản phẩm theo danh mục
        if (req.query.category_id) {
            query.category_id = req.query.category_id;
        };
        // Search sản phẩm
        if (req.query.keyword) {
            query.$text = { $search : req.query.keyword };
        };
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const products = await ProductModel
            .find(query)
            .skip(skip)
            .limit(limit)
            .sort({_id: -1});
        return res.status(200).json({
            status: "Success",
            message : "Get products successful",
            data: products,
            pages: await paginate(page, limit, query, ProductModel),
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
            error: error.message,
        });
    }
};

exports.findOne = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await ProductModel.findById(id);
        return res.status(200).json({
            status: "success",
            message: "Get product successfully",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: " Internal server error",
            error: error.message
        })
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
     
        return res.status(200).json({
            status: "success",
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
            error: error.message,
        });
    }
};

exports.remove = async (req, res ) => {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        
        return res.status(200).json({
            status: "success",
            message: "Product deleted successfully",
            data: deletedProduct,
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
            error: error.message,
        });
    }
}