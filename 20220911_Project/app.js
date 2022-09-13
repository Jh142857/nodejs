// 导入express模块
const express = require('express');
// 创建新的express服务器
const app = express();
// 设置跨域
const cors = require('cors');
app.use(cors());

// 初始化解析数据
app.use(express.urlencoded({ extended: false }))

// 托管静态资源中间件
app.use('/uploads', express.static('./uploads'));

// 挂载用于优化的全局中间件
app.use((req, res, next) => {
    res.cc = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next();
})

// 在路由前定义jwt还原token
const { expressjwt: expressJWT } = require('express-jwt');
const config = require('./config');
app.use(expressJWT({ secret: config.secretKey, algorithms: ['HS256'] }).unless({ path: /^\/api\// }));

// 模块化路由
const router = require('./router/user');
app.use('/api', router);

// 用户信息模块路由
const userInfo = require('./router/userinfo');
app.use('/my', userInfo);

// 文章类别模块路由
const articleCate = require('./router/articlecate');
app.use('/my/article', articleCate);

// 文章管理模块路由
const article = require('./router/article');
app.use('/my/article', article);

// 验证错误处理
const joi = require('joi');
app.use((err, req, res, next) => {
    // 表单验证失败
    if (err instanceof joi.ValidationError) return res.cc(err);
    // 解析token失败，身份验证失败
    if (err.name === 'UnauthorizedError') return res.cc("身份验证失败");
    // 未知错误
    res.cc(err);
})
// 运行服务器
app.listen(8080, () => {
    console.log('开启了服务器http://127.0.0.1:8080');
})