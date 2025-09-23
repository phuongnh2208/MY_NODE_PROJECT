const express = require("express");
const router = express.Router();

 // Import controller
const CategoryController = require("../apps/controllers/apis/category")
const ProductController = require("../apps/controllers/apis/product")
const OrderController = require("../apps/controllers/apis/order")
const UserController = require("../apps/controllers/apis/user")
const CommentController = require("../apps/controllers/apis/comment")
const CustomerAuthController = require("../apps/controllers/apis/customerAuth")

// Import middlewares
const {registerValidator} = require("../apps/middlewares/registerValidator");
const {loginRules, loginValidator} = require("../apps/middlewares/authValidator");


router.post("/auth/customers/register",registerValidator, CustomerAuthController.register);
router.post("/auth/customers/login", loginRules, loginValidator,CustomerAuthController.login);
router.post("/auth/customers/logout", CustomerAuthController.logout);
router.post("/auth/customers/refresh-token", CustomerAuthController.refreshToken);
router.get("/auth/customers/me", CustomerAuthController.getMe);



// Category
router.get("/categories",CategoryController.findAll);
router.get("/categories/:id",CategoryController.findOne);

// Product
router.get("/products",ProductController.findAll);
router.get("/products/:id",ProductController.findOne);
router.put("/products/:id",ProductController.update);
router.delete("/products/:id",ProductController.remove);

// Comment
router.get("/products/:id/comments",CommentController.findByProductID);
router.post("/products/:id/comments",CommentController.create);


// Order
router.get("/orders",OrderController.findAll);

// User
router.get("/users",UserController.findAll);

module.exports = router;