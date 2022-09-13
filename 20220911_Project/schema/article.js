const Joi = require("joi")

// 发布新文章
const title = Joi.string().required();
const cate_id = Joi.number().min(1).integer().required();
// 允许空值
const content = Joi.string().required().allow('');
// 只允许已发布和草稿
const state = Joi.string().valid('已发布', '草稿').required();
module.exports.addArticleSchema = {
    // 这些均通过文本发送
    body: {
        title,
        cate_id,
        content,
        state,
    }
}