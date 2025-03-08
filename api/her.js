const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/lovey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'lovey.html'));
});

app.get('/uss', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'uss.html'));
});

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public', 'error404.html'));
});

// Export as a serverless function
module.exports = app;
