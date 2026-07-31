const express = require('express');
const router = express.Router();

// GET route for browser testing
router.get('/signup', (req, res) => {
  res.send("Signup route is alive — use POST to create users.");
});

// POST route for actual signup
router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  res.json({
    message: "Signup route hit!",
    data: { username, email, password }
  });
});

module.exports = router;
