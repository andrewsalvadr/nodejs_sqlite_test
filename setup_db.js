const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./quiz.db', (err) => {
    if (err) {
        console.error(err.message);
        throw err;  
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            score integer
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Table created");
            }
        });
    }
});
