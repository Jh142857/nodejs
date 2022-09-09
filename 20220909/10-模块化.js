const qs = require('querystring');

const mw = (req, res, next) => {
    let str = '';
    // 获取客户端发送数据
    req.on('data', (chunk) => {
        // console.log(chunk);
        str += chunk;
    })
    // 数据发送完毕
    req.on('end', () => {
        console.log(qs.parse(str));
        req.body = qs.parse(str);
        next();
    })

}
module.exports = mw;