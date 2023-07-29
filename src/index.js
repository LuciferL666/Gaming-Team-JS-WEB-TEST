const express = require('express');

const routes = require('./routes'); //3.3

const app = express();

app.use(express.static('public')) // 3.1
app.use(express.urlencoded({extended: false}))//3.2

app.use(routes); //3.3

app.listen(3000, console.log('Server is listening on port 3000...'))