const express = require('express');

const router = express.Router();

router.get('/user/get', (req, res) => {
    res.send('get!');
})

router.post('/user/add', (req, res) => {
    res.send('post!');
})
// 导出路由模块
module.exports = router;