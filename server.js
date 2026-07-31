const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- your manga array here ---

// routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MangaTrack backend is running' });
});

app.get('/api/manga', (req, res) => {
  res.json(manga);
});

// ... other manga routes ...

app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  // validate input
  // hash password with bcrypt
  // save user to database
  res.json({ message: 'User created successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // For now, just accept any username/password
  if (!username || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  // Later: check against database + bcrypt
  res.json({ token: 'fake-jwt-token', message: 'Login successful' });
});
