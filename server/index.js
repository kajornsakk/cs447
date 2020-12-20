const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "ac"

});

app.get('/report', (req, res) => {
    db.query("SELECT * FROM `insert` ", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/create', (req, res) => {
    const namebuilt = req.body.namebuilt;
    const nameroom = req.body.nameroom;
    const problem = req.body.problem;

    db.query("INSERT INTO `insert`(namebuilding, room_NO, problem) VALUES (?,?,?)",
        [namebuilt, nameroom, problem], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values inserter");
            }

        });
})

app.listen('3002', () => {
    console.log('server running on port3002')
})