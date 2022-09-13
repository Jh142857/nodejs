const express = require('express');
const router = express.Router();

// 解析form-data请求体
const path = require('path');
const multer = require('multer');

// 表单验证
const expressJoi = require('@escook/express-joi');
const { addArticleSchema } = require('../schema/article')
// 指定上传的封面文件存放路径,必须是已经存在的
const upload = multer({ dest: path.join(__dirname, '../uploads') })

const routerHandler = require('../router_handler/article');
// 发布新文章，必须包含cover-img数据，即封面路径
router.post('/add', upload.single('cover-img'), expressJoi(addArticleSchema
), routerHandler.addArticle);

module.exports = router;