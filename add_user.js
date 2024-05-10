const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(express.json());

const db = new sqlite3.Database('./quiz.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Error when connecting to the database', err);
        process.exit(1); 
    }
    console.log('Connected to the database.');
});

app.post('/add_user', (req, res) => {
    const { name, score } = req.body;
    const sqlInsert = `INSERT INTO users (name, score) VALUES (?, ?)`;
    db.run(sqlInsert, [name, score], function(err) {
        if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).send("Error inserting user");
        }
        res.status(201).send(`User added with ID ${this.lastID}`);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
