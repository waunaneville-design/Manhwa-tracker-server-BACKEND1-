const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // install with: npm install node-fetch

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- placeholder local manga array (optional) ---
const manga = [
  { id: 1, title: 'Solo Leveling', status: 'Reading' },
  { id: 2, title: 'Tower of God', status: 'Completed' }
];

// --- health check route ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MangaTrack backend is running' });
});

// --- local manga route ---
app.get('/api/manga/local', (req, res) => {
  res.json(manga);
});

// --- external manhwa route (MangaDex example) ---
app.get('/api/manga', async (req, res) => {
  try {
    const response = await fetch('https://api.mangadex.org/manga?limit=10');
    const data = await response.json();

    const formatted = data.data.map(item => ({
      id: item.id,
      title: item.attributes.title.en || 'Untitled',
      description: item.attributes.description?.en || '',
      status: item.attributes.status
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch manga from external source' });
  }
});

// --- signup route ---
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }
  // TODO: hash password with bcrypt and save to DB
  res.json({ message: 'User created successfully' });
});

// --- login route ---
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }
  // TODO: verify against DB + bcrypt
  res.json({ token: 'fake-jwt-token', message: 'Login successful' });
});

// --- start server ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
