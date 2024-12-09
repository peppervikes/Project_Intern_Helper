const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY,
      username TEXT,
      password TEXT,
      email TEXT
    )
  `);
  db.run(`
    CREATE TABLE schedules (
      id INTEGER PRIMARY KEY,
      userId INTEGER,
      event TEXT,
      date TEXT,
      FOREIGN KEY(userId) REFERENCES users(id)
    )
  `);
  db.run(`
    INSERT INTO users (username, password, email)
    VALUES ('student1', '${bcrypt.hashSync('password', 10)}', 'student1@example.com')
  `);  
});

module.exports = db;
