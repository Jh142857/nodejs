// 定义用户信息的路由模块
const express = require('express');
const router = express.Router();

const userInfoHandler = require('../router_handler/userinfo');

// 验证用户信息表单
const expressJoi = require('@escook/express-joi');
const { userInfoSchema, pwdUpdateSchema, avaterUpdateSchema } = require('../schema/user');

// 获取用户信息路由
router.get('/userinfo', userInfoHandler.getUserInfo);

// 更新用户信息路由
router.post('/userinfo', expressJoi(userInfoSchema), userInfoHandler.updateUserInfo);

// 重置密码
router.post('/updatepwd', expressJoi(pwdUpdateSchema), userInfoHandler.updatePwd);

// 更新用户头像
router.post('/update/avater', expressJoi(avaterUpdateSchema), userInfoHandler.updateAvater)
module.exports = router;