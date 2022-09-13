const db = require("../db/index");

// 获取图书列表
module.exports.getArticleCates = (req, res) => {
    // 获取文章列表，删除的不列出，根据id升序排列
    db.query("select * from ev_article_cate where is_delete=0 order by id asc", (err, results) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            message: "获取文章列表成功",
            data: results
        })
    })
}

// 新增文章
module.exports.addArticleCate = (req, res) => {
    // 验证表单数据
    // 检查类名是否重复
    const sql = "select * from ev_article_cate where name=? or alias=?";
    // console.log(req.body.name, req.body.alias);
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err);
        if (results.length === 2) return res.cc("文章名和别名均已经被占用！");
        if (results.length === 1 && results[0].alias === req.body.alias && results[0].name === req.body.name) return res.cc("文章名和别名均已经被占用！");
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc("别名已经被占用！");
        if (results.length === 1 && results[0].name === req.body.name) return res.cc("文章名已经被占用！");
        // res.send('ok');
        // 新增文章类别
        const sqlStr = "insert into ev_article_cate set ?";
        db.query(sqlStr, req.body, (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.cc("增加图书失败！");
            res.cc("添加图书成功！", 0);
        })
    })

}

// 删除文章,用标记删除
module.exports.deleteArticleCate = (req, res) => {
    // 检测id是否存在？？
    db.query("update ev_article_cate set is_delete=? where id=?", [1, req.params.id], (err, results) => {
        if (err) return res.cc(err);
        // 可以用于检测id是否存在，如果不存在，报错
        if (results.affectedRows !== 1) return res.cc("删除图书失败！");
        res.cc("删除图书成功！", 0);

    })
}

// 根据id获取文章
module.exports.getArticleCateById = (req, res) => {
    // res.send(req.params);
    db.query("select * from ev_article_cate where id=?", req.params.id, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc("获取图书失败！");
        res.send({
            status: 0,
            message: "获取图书成功！",
            data: results[0]
        })
    })
}

// 根据id更新文章数据
module.exports.updateArticleCateById = (req, res) => {

    // 验证文章名和别名是否被占用
    db.query("select * from ev_article_cate where id<>? and (name=? or alias=?)", [req.body.id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err);
        if (results.length === 2) return res.cc("文章名和别名均已经被占用！");
        if (results.length === 1 && results[0].alias === req.body.alias && results[0].name === req.body.name) return res.cc("文章名和别名均已经被占用！");
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc("别名已经被占用！");
        if (results.length === 1 && results[0].name === req.body.name) return res.cc("文章名已经被占用！");

        // db.query("select * from ev_article_cate where id=?", req.id, (err, results) => {
        //     if (err) return res.cc(err);
        //     if (results.length !== 1) return res.cc("更新图书失败!");

        // })

        // 更新文章
        db.query("update ev_article_cate set ? where id=?", [req.body, req.body.id], (err, results) => {
            if (err) return res.cc(err);
            // 包含id不存在的情况
            if (results.affectedRows !== 1) return res.cc("更新图书数据失败!");
            res.cc("更新图书数据成功！", 0);
        })
    })
} 
