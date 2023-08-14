// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Set public folder
app.use(express.static('public'));

// Set body-parser
app.use(express.urlencoded({ extended: true }));

// Set routes
const commentRoute = require('./routes/comment.route');
app.use('/', commentRoute);

// Start server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});