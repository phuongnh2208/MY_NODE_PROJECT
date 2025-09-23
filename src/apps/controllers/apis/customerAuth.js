const CustomerModel = require('../../models/customer');
const jwt = require('../../../libs/jwt');
const {validationResult} =  require('express-validator');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        // Validate form
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({
                status: errors,
                errors: errors.array(), // cú pháp của module express-validator (ko nhớ thì tra)
            })
        }
        

        // Validate unique email check trùng email
        const {fullName, email, password, phone, address} = req.body;
        const emailExits = await CustomerModel.findOne({email});
        if (emailExits) {
            return res.status(400).json({
                status:"error",
                errors: "Email already exists",
            });
        }
        // Validate unique phone
        const phoneExits = await CustomerModel.findOne({phone});
        if (phoneExits) {
            return res.status(400).json({
                status:"error",
                errors: "Phone already exists",
            });
        }
        // Hash password
        const hashPassword = await bcrypt.hash(password,10); // 10 là (hợp lý nhất) độ phức tạp của mật khẩu, càng cao càng khó bẻ khóa, số càng nhiều càng tốn tài nguyên hệ thống


        // Create customer
        const newCustormer = await CustomerModel.create({
            fullName,
            email,
            password: hashPassword,
            phone,
            address,
        });
        return res.status(201).json({
            status: "success",
            message: "Registerd created successfully",
            errors: errors.array(),
        })
    } catch (error) {
        return res.status(500).json ({
            status: "error",
            message: "Internal server error",
            error: error.message
        })
    }
};

exports.login = async (req, res) => {
    try {
        const {email, password}= req.body;
        // check
        const isEmail = await CustomerModel.findOne({email});
        if (!isEmail) {
            return res.status(400).json({
                status: "error",
                message: "Invalid email "
            });
        }
        // check password
        const isPassword = await bcrypt.compare(password, isEmail.password);
        if (!isPassword) {
            return res.status(400).json({
                status: "error",
                message: "Invalid password"
            });
        }
        if (isEmail && isPassword) {
            // generate token (JWT)
            const accessToken = await jwt.generateAccessToken({isEmail});
            const {password, ...others} = isEmail.toObject; //  là lấy toàn bộ dữ liệu trong document trừ password
            // Respone token & customer
            return res.status.json(200)({
                status: "success",
                message: "Logged in successfully",
                customer: others,
                accessToken
            });

        }

    } catch (error) {
        return res.status(500).json ({
            status: "error",
            message: "Internal server error",
            error: error.message
        });
    }
};

exports.logout = async (req, res) => {};

exports.refreshToken = async (req, res) => {};

exports.getMe = async (req, res) => {};