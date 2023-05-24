// Imports
const express = require('express');
const path = require('path');

// Variables
const app = express();
const PORT = 8080;

// Server configuration for load static assets and css files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/src/utils/exports', express.static(path.join(__dirname, 'src/utils/exports')))
app.use('/src/utils/styles', express.static(path.join(__dirname, 'src/utils/styles')))
app.use('/src/pages/action_menu', express.static(path.join(__dirname, 'src/pages/action_menu')))
app.use('/src/pages/basic_concepts', express.static(path.join(__dirname, 'src/pages/basic_concepts')))
app.use('/src/pages/state_machines', express.static(path.join(__dirname, 'src/pages/state_machines')))

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/pages/action_menu/index.html'));
});

app.get('/basic', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/pages/basic_concepts/index.html'));
});

app.get('/machines', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/pages/state_machines/index.html'));
});


app.listen(PORT, () => {
    console.log(`\x1b[32m[Server] running in \x1b[36mhttp://localhost:${PORT}`)
});


