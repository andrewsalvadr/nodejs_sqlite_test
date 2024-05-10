const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./quiz.db');

app.get('/get_users', (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            res.status(400).send('Error retrieving data');
        } else {
            res.send(rows);
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
