const Joi = require("joi");

// 必须是字符串
const name = Joi.string().required();
// 必须是字母或数字、字符串
const alias = Joi.string().alphanum().required();

module.exports.addArticleSchema = {
    body: {
        name,
        alias
    }
}

// 删除文章
// 必须是数字，最小是1
const id = Joi.number().integer().min(1).required();
module.exports.delAritcleSchema = {
    // 这里是根据url动态参数传入，所以要用params，req.params
    params: {
        id
    }
}

// 根据id获取文章
module.exports.getArticleByIdSchema = {
    params: {
        id
    }
}


// 根据id更新图书
module.exports.updateArticleByIdSchema = {
    body: {
        id,
        name,
        alias
    }
}