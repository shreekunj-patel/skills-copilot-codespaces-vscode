// Create web server

// Import required modules
const express = require('express');

// Create the Express app
const app = express();

// Define the port number
const port = 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is a simple web server using Express!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
