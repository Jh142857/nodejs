const itheima = require('./itheima-tools-bestone');

const dataStr = itheima.dataFormat(new Date());
console.log(dataStr);

const htmlStr = '<h1 style="height: 100px; width: 100px;">11112222&nbsp</h1>'
const str = itheima.htmlEscape(htmlStr);
console.log(str);

const htmlStr1 = itheima.htmlUnEscape(str);
console.log(htmlStr1);