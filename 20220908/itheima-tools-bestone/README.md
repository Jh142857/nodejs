## 安装方式
```js
npm i itheima-tools-bestone
```
## 导入方式
```js
const itheima = require('./itheima-tools-bestone');
```
## 功能1：格式化时间
```js
const dataStr = itheima.dataFormat(new Date());
console.log(dataStr);
```

## 功能2：转义html特殊字符
```js
const htmlStr = '<h1 style="height: 100px; width: 100px;">11112222&nbsp</h1>'
const str = itheima.htmlEscape(htmlStr);
console.log(str);
```

## 功能3：还原html特殊字符
```js
const htmlStr1 = itheima.htmlUnEscape(str);
console.log(htmlStr1);
```

## 开源协议
ISC