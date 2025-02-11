const express = require('express');
const cors = require('cors');
const sendEmail = require('./middleware/bookUsMiddleware');
const sendContactEmail = require('./middleware/contactMiddleware');
const sendQuestionEmail = require('./middleware/askMiddleware');
require('dotenv').config();

const app = express();

// Configure CORS properly
app.use(cors({
  origin: ['http://localhost:3000', 'https://all-is-well-shot-it.vercel.app'], // Use an array for multiple origins
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

// Middleware
app.use(express.json());

// Root Route (For Testing in Browser)
app.get('/', (req, res) => {
  res.send('<h1>🚀 Server is Running Successfully! 🚀</h1>');
});

// API Routes
app.post('/send-email', sendEmail);
app.post('/send-contact-email', sendContactEmail);
app.post('/send-question-email', sendQuestionEmail);

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Backend Running on Port ${PORT}`);
});
