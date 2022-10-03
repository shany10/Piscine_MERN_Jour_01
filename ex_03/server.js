const express = require('express');
const app = express();
const config = require('../config.js');
const fs = require('fs');
const html = fs.readFileSync('index.html' , 'utf8');

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(config.port, () => {
    
});