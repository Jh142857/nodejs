// 模块化路由
const express = require('express');
const router = express.Router();

const userHandler = require('../router_handler/user');

// 采用第三方包验证是否合法
const expressJoi = require('@escook/express-joi');
const { userSchema } = require('../schema/user');
// 注册请求
router.post('/reguser', expressJoi(userSchema), userHandler.regUser);
// 登录请求
router.post('/login', expressJoi(userSchema), userHandler.login);

module.exports = router;