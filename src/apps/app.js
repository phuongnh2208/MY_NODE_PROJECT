const express = require('express');
const bodyParser = require('body-parser')
const config = require("config");
const app = express();


app.use(bodyParser.json());
app.use(config.get("app.prefixApiVersion") , require("../routers/web")); // toàn bộ router đều được gắn tiền tố giống nhau là /api/v1
module.exports = app;