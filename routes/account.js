var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : '118.126.109.20',
    user     : 'bryant',
    password : 'leekobe24',
    database: 'wechat'
});

router.get('/', function (rep, res, next) {
    connection.connect();

    connection.query('SELECT * from user', function(err, rows, fields) {
        if (err) throw err;
        const d = rows[0];
        const data = {
            'name':  d.user_name,
            'pwd': d.user_pwd
        }
        res.send(data);
    });

    connection.end();
});

module.exports = router;



