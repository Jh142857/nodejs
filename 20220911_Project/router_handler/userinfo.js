const db = require("../db/index");
const bcryptjs = require('bcryptjs');
module.exports.getUserInfo = (req, res) => {
    // 从服务器中获取信息
    const sql = 'select * from ev_users where id=?';
    db.query(sql, req.auth.id, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc("用户信息获取失败！");
        // 删除密码信息
        delete results[0].password;
        res.send({
            status: 0,
            message: '获取用户信息成功！',
            data: results[0]
        })
    })
}

module.exports.updateUserInfo = (req, res) => {
    // 验证表单数据

    // 修改用户信息
    const sql = 'update ev_users set ? where id=?';
    // req.body是post请求体数据
    // console.log(req.body);
    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err);
        // 当id对应行不存在或者被删除是会提示错误
        if (results.affectedRows !== 1) return res.cc("修改用户信息失败！");

        res.cc("更新信息成功！", 0);
    })
}

module.exports.updatePwd = (req, res) => {
    // 验证用户是否存在
    const sqlStr = 'select * from ev_users where id=?';
    db.query(sqlStr, req.auth.id, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc("用户不存在！");
        // 验证旧密码是否正确,第一项不需要再加密
        const compareResult = bcryptjs.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) return res.cc("旧密码输入错误！");
        // 将新密码存至数据库中
        const sql = 'update ev_users set password=? where id=?';
        // console.log(req.auth.id);
        db.query(sql, [bcryptjs.hashSync(req.body.newPwd, 10), req.auth.id], (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.cc("更新密码失败！");
            res.cc("更新密码成功！", 0);
        })
    })

}

module.exports.updateAvater = (req, res) => {
    // res.send('ok');
    const sql = 'update ev_users set user_pic=? where id=?';
    // 更新用户头像数据
    db.query(sql, [req.body.avater, req.auth.id], (err, results) => {
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc("更新头像失败！");
        res.cc("更新头像成功！", 0);
    })
}