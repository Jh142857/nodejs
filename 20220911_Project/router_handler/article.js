const db = require("../db/index")
const path = require('path');
module.exports.addArticle = (req, res) => {
    // req.body存放文本，req.file存放文件
    // res.send([req.body, req.file]);
    // 检测封面是否上传
    if (!req.file || !req.file.fieldname) return res.cc("请上传文章封面！");
    // 将文章上传至数据库
    const article = {
        ...req.body,
        cover_img: path.join("/uploads", req.file.filename),
        pub_date: new Date(),
        // 登录者的id
        author_id: req.auth.id
    }
    db.query('insert into ev_article set ?', article, (err, results) => {
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc("发布新文章失败!");
        res.cc("发布新文章成功！", 0);
    })
}