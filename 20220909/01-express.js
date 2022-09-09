const express = require('express');

const app = express();

app.listen(80, () => {
    console.log("开启了服务器http://127.0.0.1");
})

app.get('/', (req, res) => {
    res.send(req.query);
})

// app.get('/:id/:name', (req, res) => {
//     res.send(req.params);
// })

app.post('/user', (req, res) => {
    res.send('post请求！');
})

app.use('/aabc', express.static('clock'));