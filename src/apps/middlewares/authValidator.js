// Nhiệm vụ chặn các request không hợp lệ từ client gửi lên để mình xử lý lỗi trước khi vào controller 
// VD: đăng ký tài khoản mà không có email, password
// VD: tạo đơn hàng mà không có thông tin sản phẩm, số lượng, địa chỉ giao hàng

// Baắt buộc phải gọi validationResult để lấy kết quả validate


const {body, validationResult} = require('express-validator');
const loginRules = [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required"),

];

const loginValidator = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({
            status: "error",
            errors: errors.array(),
        });
    }
    next();
};
module.exports = { loginRules , loginValidator };