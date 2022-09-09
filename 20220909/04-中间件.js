// 导入express模块
const express = require('express');
// 创建新的express服务器
const app = express();

// 中间件共享req和res
app.use((req, res, next) => {
    // console.log("这是一个中间件");
    const date = Date.now();
    req.date = date;
    next();
})

// 路由
app.get('/', (req, res) => {
    // res.send(req)
    // console.log("路由");
    res.send("主页" + req.date);
})

app.get('/user', (req, res) => {
    res.send("用户页面" + req.date)
})

// 运行服务器
app.listen(80, () => {
    console.log('开启了服务器http://127.0.0.1');
})