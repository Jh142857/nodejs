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