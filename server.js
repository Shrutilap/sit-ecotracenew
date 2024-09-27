require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/main', (req, res) => {
    console.log("serving home.html");
    res.sendFile(path.join(__dirname, 'public', 'mainpage.html')); // Ensure this path matches where home.html is located
});
// Serve the login.html page at the /register route
app.get('/register', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/choose', (req, res) => {
    console.log("popup");
    res.sendFile(path.join(__dirname, 'public', 'popup&form.html'));
});


// Root route to redirect to /register
app.get('/', (req, res) => {
    res.redirect('/main');
});


app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cards.html'));  
});

app.get('/cards', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'cards.html'));
});
app.get('/login', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'login_actual.html'));
});
<<<<<<< HEAD

// app.get('/cards', (req, res) => {
//     console.log("serving login.html");
//     res.sendFile(path.join(__dirname, 'public', 'cards.html'));
// });

=======
>>>>>>> c23fd5f934dff3234e52b37bf83dee9a0d5f7275
app.get('/tips', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'tips.html'));
});
<<<<<<< HEAD

=======
>>>>>>> c23fd5f934dff3234e52b37bf83dee9a0d5f7275
app.get('/mining', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'mining.html'));
});
<<<<<<< HEAD

=======
>>>>>>> c23fd5f934dff3234e52b37bf83dee9a0d5f7275
app.get('/progress', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'progress.html'));
});
<<<<<<< HEAD

=======
>>>>>>> c23fd5f934dff3234e52b37bf83dee9a0d5f7275
app.get('/dashboard', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});
<<<<<<< HEAD

=======
>>>>>>> c23fd5f934dff3234e52b37bf83dee9a0d5f7275
app.get('/footprint', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'footprint.html'));
});
app.get('/rewards', (req, res) => {
    console.log("serving login.html");
    res.sendFile(path.join(__dirname, 'public', 'rewards.html'));
});
<<<<<<< HEAD

=======
>>>>>>> c23fd5f934dff3234e52b37bf83dee9a0d5f7275
// Log database connection details (for debugging)
console.log('Database Connection Details:', {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD), // Ensure password is a string
    port: process.env.DB_PORT,
});

// PostgreSQL connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD), // Ensure password is a string
    port: process.env.DB_PORT,
});

// POST endpoint for user registration
app.post('/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    console.log("Received data:", req.body);

    try {
        const result = await pool.query(
            'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [first_name, last_name, email, password]
        );

        // Send a response indicating success and the redirect URL
        res.status(201).json({
            message: 'User added successfully',
            redirectUrl: '/home' // Use the correct redirect URL
        });
    } catch (error) {
        console.error('Database error details:', error); // Log detailed error info
        if (error.code === '23505') { // Unique violation error
            return res.status(409).send('Email already exists');
        }
        res.status(500).send('Internal Server Error');
    }
});

// Login route for actual login page
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Query the database for a user with the provided email
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = result.rows[0];

        // Check if the password matches (plain-text password for now)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // If email and password match, redirect to the home page
        res.status(200).json({
            message: 'Login successful',
            redirectUrl: '/home'
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
