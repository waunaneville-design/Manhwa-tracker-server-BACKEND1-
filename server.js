require('dotenv').config();
const mongoose = require('mongoose');


const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://waunaneville_db_user:<Lascelles2007>@mangatrack.4qzoaxg.mongodb.net/mangatrack?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const mangaRoutes = require('./routes/manga');

const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


const corsOptions = {
  origin: ['http://localhost:5174'], 
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// routes
app.use('/api', authRoutes);
app.use('/api', mangaRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MangaTrack backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/api/users/signup', async (req, res) => {
  // signup logic here
});

