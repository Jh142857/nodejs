// 导入express模块
const express = require('express');
// 创建新的express服务器
const app = express();

// 先对JSONP请求进行定义
app.get('/api/jsonp', (req, res) => {
    // 回调函数动态生成
    const callback = req.query.callback;
    // 数据
    const data = { name: 'zs', age: 18};
    // 需要返回函数的调用
    const str = `${callback}(${JSON.stringify(data)})`;
    res.send(str);
    console.log(str);
})

const cors = require('cors');
app.use(cors());
// 路由接口
const router = require('./12-路由中间件');

// 运行服务器
app.listen(80, () => {
    console.log('开启了服务器http://127.0.0.1');
})

// 路由
app.use('/api', router);