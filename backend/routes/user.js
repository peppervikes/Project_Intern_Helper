const express = require('express');
const db = require('../models/database');
const router = express.Router();

router.get('/profile', (req, res) => {
  const userId = req.query.id; // Example: Use query parameter for simplicity
  db.get('SELECT * FROM users WHERE id = ?', [userId], (err, user) => {
    if (err) return res.status(500).send('Database error');
    res.json(user);
  });
});

module.exports = router;
