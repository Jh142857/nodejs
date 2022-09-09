// 导入express模块
const express = require('express');
// 创建新的express服务器
const app = express();

// 实现类似express.urlencoded中间件
const mw = require('./10-模块化');
app.use(mw);

// POST请求
app.post('/', (req, res) => {
    // console.log(11);
    res.send(req.body);
})


// 运行服务器
app.listen(80, () => {
    console.log('开启了服务器http://127.0.0.1');
})