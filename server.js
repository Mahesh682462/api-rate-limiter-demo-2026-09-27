const express = require('express');
const path = require('path');
const rateLimiter = require('./rateLimiter');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Unprotected route
app.get('/api/public', (req, res) => {
    res.json({ message: 'This is a public API endpoint.' });
});

// Protected route with rate limiter middleware
app.get('/api/protected', rateLimiter, (req, res) => {
    res.json({ message: 'This is a rate-limited API endpoint!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
