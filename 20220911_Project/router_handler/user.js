const db = require("../db/index");

const bcryptjs = require('bcryptjs');
// token相关包
const jwt = require('jsonwebtoken');
const config = require('../config.js');

// 注册处理函数
module.exports.regUser = (req, res) => {
    // res.send('reg OK!');
    const userInfo = req.body;
    // 验证表单是否合法

    // if (!userInfo.username || !userInfo.password) return res.send({ status: 1, message: '账号或密码输入非法！' });
    if (!userInfo.username || !userInfo.password) return res.cc('账号或密码输入非法！');

    // 验证用户名是否被占用
    const sqlStr1 = 'select * from ev_users where username=?'
    db.query(sqlStr1, userInfo.username, (err, results) => {
        // if (err) return res.send({ status: 1, message: err.message });
        if (err) return res.cc(err);
        // if (results.length > 0) return res.send({ status: 1, message: '用户名重复！' });
        if (results.length > 0) return res.cc('用户名重复！');

        // 异步的，不能写到外面，否则return无效
        // 对密码进行加密处理
        userInfo.password = bcryptjs.hashSync(userInfo.password, 10);
        console.log(userInfo);
        // 插入新用户
        const sqlStr2 = 'insert into ev_users set ?';
        db.query(sqlStr2, { username: userInfo.username, password: userInfo.password }, (err, results) => {
            // if (err) return res.send({ status: 1, message: err.message });
            if (err) return res.cc(err);
            // if (results.affectedRows !== 1) return res.send({ status: 1, message: '注册用户过多，请稍后重试！' });
            // if (results.affectedRows !== 1) return res.cc('注册用户过多，请稍后重试！');
            if (results.affectedRows !== 1) return res.cc('注册用户过多，请稍后重试！');
            // res.send({ status: 0, message: "注册成功！" });
            res.cc("注册成功！", 0);
        })
    })


}

// 登录处理函数
module.exports.login = (req, res) => {
    // 登录数据
    const userInfo = req.body;
    // 根据用户名查询用户的数据
    const sqlStr = 'select * from ev_users where username=?';
    db.query(sqlStr, userInfo.username, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc("用户名不存在！");

        // 判断用户输入的密码是否正确
        const compareResult = bcryptjs.compareSync(userInfo.password, results[0].password);
        if (!compareResult) return res.cc("密码输入错误！");
        // 生成JWT的Token字符串
        // 对象解构，剔除密码和用户头像
        const user = { ...results[0], password: '', user_pic: '' }
        // 生成token
        const token = jwt.sign(user, config.secretKey, { expiresIn: config.expiresIn })
        // 最好加上Bearer
        res.send({
            status: 0,
            message: "登录成功！",
            token: 'Bearer ' + token,
        })
    })


}
