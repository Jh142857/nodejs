const fs = require('fs')

// 读文件
fs.readFile(__dirname + '/files/1.txt', 'utf-8', function(err, dataStr){
    // console.log(err);
    // console.log(dataStr);
    console.log(11);
    if(err) {
        return console.log('文件读取错误');
    }
    console.log(dataStr);
})

fs.writeFile(__dirname + '/files/2.txt', 'abcd', function(err){
    console.log(22);
    if(err) {
        return console.log('文件写入失败！');
    }
})