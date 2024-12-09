const express = require('express');
const db = require('../models/database');
const router = express.Router();

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  db.all('SELECT * FROM schedules WHERE userId = ?', [userId], (err, schedules) => {
    if (err) return res.status(500).send('Database error');
    res.json(schedules);
  });
});

router.post('/', (req, res) => {
  const { userId, event, date } = req.body;
  db.run('INSERT INTO schedules (userId, event, date) VALUES (?, ?, ?)', [userId, event, date], function(err) {
    if (err) return res.status(500).send('Failed to add schedule');
    res.json({ id: this.lastID });
  });
});

module.exports = router;
