const express = require('express');

const router = express.Router();

// 验证增加的文章类别名称
const expressJoi = require('@escook/express-joi');
const { addArticleSchema, delAritcleSchema, getArticleByIdSchema, updateArticleByIdSchema } = require('../schema/articlecate')

const articleHandler = require('../router_handler/articlecate');
// 获取文章类别列表
router.get('/getcates', articleHandler.getArticleCates);
// 新增文章类别列表
router.post('/addcate', expressJoi(addArticleSchema), articleHandler.addArticleCate);
// 删除文章类别列表
// 根据id来删除，所以后面要跟:id
// 不需要提交数据，所以用get
// 验证id格式
router.get('/delcate/:id', expressJoi(delAritcleSchema), articleHandler.deleteArticleCate);
// 根据id文章获取文章分类数据
router.get('/cates/:id', expressJoi(getArticleByIdSchema), articleHandler.getArticleCateById);
// 根据id更新文章分类数据
router.post('/updatecate', expressJoi(updateArticleByIdSchema), articleHandler.updateArticleCateById);

module.exports = router;