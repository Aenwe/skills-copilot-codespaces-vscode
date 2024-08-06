// Create web server
// 1. Create a server
// 2. Listen to port
// 3. Create a route
// 4. Create a response
// 5. Send response

// 1. Create a server
const express = require('express');
const app = express();
const PORT = 3000;

// 3. Create a route
app.get('/comments', (req, res) => {
    // 4. Create a response
    res.send('This is a response from comments.js');
});

// 2. Listen to port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});