// 导入express模块
const express = require('express');
// 创建新的express服务器
const app = express();

// 给app绑定这两个事件就可以实现urlencoded键值对形式数据提交
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    res.send(req.body);
})

// 运行服务器
app.listen(80, () => {
    console.log('开启了服务器http://127.0.0.1');
})