// Imports
const express = require('express');
const path = require('path');

// Variables
const app = express();
const PORT = 8080;

// Server configuration for load static assets and css files
app.use('/exports', express.static(path.join(__dirname, 'exports')))
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/styles', express.static(path.join(__dirname, 'styles')))
app.use('/src/action_menu', express.static(path.join(__dirname, 'src/action_menu')))
app.use('/src/basic_concepts', express.static(path.join(__dirname, 'src/basic_concepts')))
app.use('/src/state_machines', express.static(path.join(__dirname, 'src/state_machines')))

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/action_menu/index.html'));
});

app.get('/basic', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/basic_concepts/index.html'));
});

app.get('/machines', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/state_machines/index.html'));
});


app.listen(PORT, () => {
    console.log(`\x1b[32m[Server] running in \x1b[36mhttp://localhost:${PORT}`)
});


