const express = require('express');
const router = express.Router();

// simple test signup route
router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  res.json({
    message: "Signup route hit!",
    data: { username, email, password }
  });
});

module.exports = router;
