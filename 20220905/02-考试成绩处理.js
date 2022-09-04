const { ok } = require('assert');
const fs = require('fs');

fs.readFile('./files/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    // 用正则实现替换
    var okStr = dataStr.replace(/=/g, '：').replace(/ /g, '\n');
    // for (var i = 0; i < dataStr.length; i++) {
    //     if (dataStr[i] === ' ') {
    //         okStr.push('\n');
    //     }
    //     else if (dataStr[i] === '=') {
    //         okStr.push('：');
    //     }
    //     else {
    //         okStr.push(dataStr[i]);
    //     }

    // }
    fs.writeFile('./files/ok.txt', okStr, function (err) {
        if (err) {
            return console.log('写入文件失败' + err.message);
        }
    })
})