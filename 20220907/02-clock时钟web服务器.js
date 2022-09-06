const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url;
    let fp = '';
    if (url === '/')
        fp = path.join(__dirname, './clock/index.html');
    // 请求的是其他路径，进行拼接，包括index.js  index.css
    else fp = path.join(__dirname, './clock', url);
    fs.readFile(fp, 'utf-8', (err, dataStr) => {
        if (err) return res.end('404 not found!');
        res.end(dataStr);
    })
})

server.listen(80, () => {
    console.log("Start running server at http://127.0.0.1");
})