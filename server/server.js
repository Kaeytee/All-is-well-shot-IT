const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./middleware/bookUsMiddleware'); // Ensure correct import
const sendContactEmail = require('./middleware/contactMiddleware'); // Import the new middleware
const sendQuestionEmail = require('./middleware/askMiddleware');
require('dotenv').config();

const app = express();

// Configure CORS (Ensure frontend URL is correct)
app.use(cors({
  origin: 'http://localhost:3000', // Update to match your frontend
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

// Middleware
app.use(express.json());
app.use(bodyParser.json());

app.post('/send-email', sendEmail); // Use the middleware here
app.post('/send-contact-email', sendContactEmail); // Add the new route
app.post('/send-question-email', sendQuestionEmail); // Use the new middleware

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Backend Running on Port ${PORT}`);
});
