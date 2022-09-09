// 导入express模块
const express = require('express');
// 创建新的express服务器
const app = express();

// 中间件1函数定义
const mw1 = (req, res, next) => {
    console.log("组件1");
    next();
}

// 中间件2函数定义
const mw2 = (req, res, next) => {
    console.log("组件2");
    next();
}

// app.use(mw1);
// app.use(mw2);
app.get('/', [mw1, mw2], (req, res) => {
    console.log("get请求！");
    res.send("主页！");
})

app.get('/user', (req, res) => {
    res.send("用户界面")
})
// 运行服务器
app.listen(80, () => {
    console.log('开启了服务器http://127.0.0.1');
})