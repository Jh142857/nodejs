const express = require('express');
const app = express();

const userRouter = require('./03-路由模块');
// 添加前缀
app.use('/api',userRouter)

app.listen(80, () => {
    console.log("服务器http://127.0.0.1");
})