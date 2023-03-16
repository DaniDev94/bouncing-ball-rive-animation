// Imoorts
const express = require('express');
const path = require('path');

// Variables
const app = express();
const PORT = 80800;

// Server configuration
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\x1b[32m[Server] running in \x1b[36mhttp://localhost:${PORT}`)
});

