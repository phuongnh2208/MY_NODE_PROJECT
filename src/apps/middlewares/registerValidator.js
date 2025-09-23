// Nhiệm vụ chặn các request không hợp lệ từ client gửi lên để mình xử lý lỗi trước khi vào controller 
// VD: đăng ký tài khoản mà không có email, password
// VD: tạo đơn hàng mà không có thông tin sản phẩm, số lượng, địa chỉ giao hàng

// Baắt buộc phải gọi validationResult để lấy kết quả validate


const {body} = require('express-validator');
exports.registerValidator = [
    body("fullName").notEmpty().withMessage("Fullname is required"), // notEmpty: không được để trống
    body("email").notEmpty().withMessage("Email is required"), 
    body("email").isEmail().withMessage("Invalid email"), // isEmail: phải đúng định dạng email
    body("password").notEmpty().withMessage("Password is required"),
    body("phone").notEmpty().withMessage("Phone is required"),
    // body("phone").isMobilePhone.withMessage("Invalid Phone"), // isMobilePhone: phải đúng định dạng số điện thoại
    body("address").notEmpty().withMessage("Address is required"),
];

