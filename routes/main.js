// Create a new router
const express = require("express");
const router = express.Router();
const path = require('path');  // at the top if not already

// Send an HTML file
router.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/a.html'));
});

// Handle the routes
router.get("/", (req, res) => res.send("Hello World!"));

//Display HTML message
router.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'));

//Display contact message
router.get('/contact', (req, res) => res.send ('<h3>Connect with me on LinkedIn: www.linkedin.com/in/sanuziajorge </h3>'));

//Display the current date and time
router.get('/date', (req, res) => {
    // Create a new Date object to get the current date and time
    const now = new Date();  
    // Send a response with the formatted date and time
    res.send(`Current date and time: ${now}`);
});

//Display welcome message + name 
router.get('/welcome/:name', (req, res) => {
    const userName = req.params.name;  // get the name from the URL
    res.send(`Welcome ${userName}!`);
});

// Chained route handlers
router.get('/chain', 
    (req, res, next) => {
        console.log("1st handler executed");
        // Call next() to move to the next handler
        next();
    },
    (req, res) => {
        res.send("Second handler executed after the first one!");
    }
);

// Export the router object so index.js can access it
module.exports = router;

