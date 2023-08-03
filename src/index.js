const express = require("express");
const handlebars = require('express-handlebars'); //6.2
const path = require('path'); //6.8
const mongoose = require('mongoose'); //8.2
const cookiePraser = require('cookie-parser'); //18.2

const { auth } = require('./middlewares/authMiddleware'); //20.2

const routes = require("./routes"); //3.3

const app = express();

//TODO: CHANGE DB NAME
mongoose.connect(`mongodb://localhost:27017/Gaming-Team`)
.then(() => console.log('DB connected successfully'))
.catch(err => console.log('DB Error', err.message));

app.engine('hbs', handlebars.engine({ //6.3
    extname: 'hbs'
}));
app.set('view engine', 'hbs'); //6.3
app.set('views', 'src/views'); //6.4

app.use(express.static(path.resolve(__dirname, 'public'))) //6.8

app.use(express.static("public")); // 3.1
app.use(express.urlencoded({ extended: false })); //3.2
app.use(cookiePraser()); //18.2
app.use(auth); //20.2 important to be after cookieParser
app.use(routes); //3.3

app.listen(3000, console.log("Server is listening on port 3000..."));
