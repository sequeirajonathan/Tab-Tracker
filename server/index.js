const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Routes
app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! have fun!`
    })
});

// Actively listen on dynamic port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})