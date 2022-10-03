const express = require('express');
const app = express();
const config = require('../config.js');
const fs = require('fs');

app.set('view engine', 'ejs');

app.get('/name/:name?', (req, res) => {
    let name = req.params.name;
    if(!name) {
       name = 'unknown';
    }
    res.render('index', {
        name: name,
      });
});

app.listen(config.port, () => {
    
});