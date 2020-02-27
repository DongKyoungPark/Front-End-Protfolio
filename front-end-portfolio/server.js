const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

app.get("/users", (req, res) => {
    connection.query(
        "select * from users",
        // "select * from users where isDeleted = 0",
        (err, rows, fields) => {
            res.send(rows);
            console.log(err);
            console.log(rows);
        }
    );
});

app.post("/users", (req, res) => {
    let sql = "insert into users values (null,?,?,now())";
    // let sql = "insert into users values (null,?,?,?,now(),0)";
    let name = req.body.name;
    let dsc = req.body.dsc;
    console.log(name);
    console.log(dsc);

    let params = [name, dsc];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
            console.log(err);
            console.log(rows);
        });
});

app.delete("/users/:id", (req, res) => {
    let sql = "update users set isDeleted = 1 where id = ?";
    let params =[req.params.id];
    connection.query(sql,params,
        (err, rows, fields)=>{
            res.send(rows);
            console.log(err);
            console.log(rows);
        });
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}/`));