const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

// user 테이블 조회
app.get("/api/users", (req, res) => { 
    connection.query(
        "select * from users where isDeleted = 0",
        (err, rows, fields) => {
            res.send(rows);
            // console.log(err);
            // console.log(rows);
        }
    );
});

// 댓글 추가
app.post("/api/users", (req, res) => {
    let sql = "insert into users values (null,?,?,now(),now(),0)";
    let name = req.body.name;
    let dsc = req.body.dsc;
    let params = [name, dsc];
    console.log(params);
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
            // console.log(err);
            // console.log(rows);
        });
});

// 댓글 삭제
app.delete("/api/users/:id", (req, res) => {
    let sql = "update users set isDeleted = 1 where id = ?";
    let params =[req.params.id];
    connection.query(sql,params,
        (err, rows, fields)=>{
            res.send(rows);
            // console.log(err);
            // console.log(rows);
        });
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));