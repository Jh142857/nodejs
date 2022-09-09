const express = require('express');
const app = express();

app.get('/', (req, res) => {
    throw new Error("服务器内部错误！");
    res.send("主页");
})

app.use((err, req, res, next) => {
    console.log("发生了错误！");
    res.send(err.message);
})

app.listen(80, () => {
    console.log("开启了服务器http://127.0.0.1");
})