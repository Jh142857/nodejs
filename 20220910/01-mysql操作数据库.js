const mysql = require('mysql');

const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'my_db_01'
})

// db.query('select 1', (err, results) => {
//     if(err) return console.log(eerr.message);
//     console.log(results);
// })


// 查询:返回对象
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
//     if(err) return console.log(err.message);
//     console.log(results);
// })

// 插入
// const user = { username:'nihaoya', password:'666666'};
// // const sqlStr = 'insert into users (username, password) values (?, ?)';
// const sqlStr = 'insert into users set ?';
// db.query(sqlStr, user, (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log("插入数据成功");
// })

// 更新数据
// const user = { id:6, username:'0000', password:'164865'};
// const sqlStr = 'update users set ? where id=?';
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log('更新数据成功');
// })

// 删除数据
// const sqlStr = 'delete from users where id=?';
// db.query(sqlStr, 6, (err, results) => {
//         if(err) return console.log(err.message);
//         if(results.affectedRows === 1) console.log('删除数据成功');
//     })

// 标记删除
const sqlStr = 'update users set status=? where id=?';
db.query(sqlStr, [1, 5], (err, results) => {
        if(err) return console.log(err.message);
        if(results.affectedRows === 1) console.log('标记删除数据成功');
    })