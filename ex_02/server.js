const express = require('express');
const app = express();
const config = require('../config.js');
const port =  process.env.PORT || 4242;

app.get('/', (req, res) => {
    res.send('Great ! It works.');
});

app.listen(config.port, () => {
    
});