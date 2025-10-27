const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/vehicles', (req, res) => res.render('vehicles'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/login', (req, res) => res.render('login'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
