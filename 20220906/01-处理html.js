const fs = require('fs');
const path = require('path');

const regCss = /<style>[\s\S]*<\/style>/;
const regJs = /<script>[\s\S]*<\/script>/;

// fs.mkdir(path.join(__dirname, './clock'), err => {
//     if (err) return console.log("创建文件夹错误！" + err.message);
// });

fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, dataStr) => {
    if (err) {
        return console.log("读取文件错误！" + err.message);
    }

    // console.log(dataStr);
    resolveEle(dataStr, 'style');
    resolveEle(dataStr, 'script');
    resolveHtml(dataStr)
})

function resolveEle(dataStr, type) {
    let r, ext;
    if (type === 'style') {
        r = regCss.exec(dataStr);
        ext = '.css';
    }
    else if (type === 'script') {
        r = regJs.exec(dataStr);
        ext = '.js';
    }
    const newStr = r[0].replace(`<${type}>`, '').replace(`</${type}>`, '');
    fs.writeFile(path.join(__dirname, `./clock/index${ext}`), newStr, err => {
        if (err) return console.log(`写入${ext}文件失败！` + err.message);
    })
}

function resolveHtml(dataStr) {
    var newStr = dataStr.replace(regCss, '<link rel="stylesheet" href="./index.css">')
        .replace(regJs, '<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname, './clock/index.html'), newStr, err => {
        if (err) return console.log('写入html文件失败！' + err.message);
    })
}