## Node.js学习记录

### 参考资料 
https://www.bilibili.com/video/BV1a34y167AZ?p=9&spm_id_from=pageDriver&vd_source=88e4bffc33a1ac3ec57e1b3c0320c0bf

### 学习记录（持续更新）

#### 2022.09.05
- nodejs如何运行js文件
- fs文件系统模块
  - 读文件fs.readFiles
  - 写文件fs.writeFiles
- path路径模块
  - 拼接path.join
  - 文件名path.basename
  - 拓展名path.ext

#### 2022.09.06 / 07
- http模块：创建web服务器
  - 引入模块
  - 创建server实例
  - 绑定request事件：发送请求时触发
    - req：请求对象 url表示从端口号开始的url地址；method表示请求方式
    - res：响应对象 .end(str)返回指定内容，并结束处理过程
  - 绑定拎树藤事件：启动服务器成功后返回
- 模块化
  - 模块作用域
  - 向外共享：module.exports对象
  - exports和module.exports指向同一对象，但引入模块时调的是后者

#### 2022.09.08
- npm与包
  - npm install module_name
  - npn init -y 生成 package.json
  - npm install 会一次性安装 package.json 中的 dependencies 安装包
  - 如果某些包旨在项目开发时有用，上线时不用，加入devDependencies中，
    - npm i 包名 -D
    - npm install 包名 --save-dev
  - 切换镜像
    - npm config get registry 查看当前镜像
    - npm config get registry=""切换镜像地址
  - 采用nrm工具切换镜像
    - 安装：npn i nrm -g（表示全局包）
    - 查看源列表：nrm ls
    - 切换源：nrm use taobao
  - 一般只有工具包才会当作全局包，如i5ting_toc，将md文件转化为html文件
  - 发布npm包：npm publish