const joi = require('joi');

const username = joi.string().alphanum().min(3).max(12).required();
const password = joi.string()
    .pattern(/^[\S]{6,15}$/)
    .required();
module.exports.userSchema = {
    // 2.1 校验 req.body 中的数据
    body: {
        username,
        password,
    }
}

// 更新用户信息
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();

module.exports.userInfoSchema = {
    body: {
        id,
        nickname,
        email
    }
}

// 更新用户密码
const oldPwd = password;
const newPwd = joi.not(joi.ref('oldPwd')).concat(password);

module.exports.pwdUpdateSchema = {
    body: {
        oldPwd,
        newPwd
    }
}

// dataUri() 指的是如下格式的字符串数据：
// data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
const avater = joi.string().dataUri().required();

module.exports.avaterUpdateSchema = {
    body: {
        avater
    }
}