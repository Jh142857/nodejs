// 导入express模块
const express = require('express');
// 创建新的express服务器
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {
    // console.log(req.body);
    console.log(11);
    res.send(req.body);
})

// app.post('/', (req, res) => {
//     console.log(22);
//     res.send(req.body);
// })

// 运行服务器
app.listen(80, () => {
    console.log('开启了服务器http://127.0.0.1');
})