// === MODULES === //
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const mysql = require('mysql');
const sync = require('sync-request');

const app = express();

// === LOADING PAGE === //

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(flash());

const router = express.Router();

// === HOME PAGE === //
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/karta_pacjeta', (req, res) => {
    res.render('karta_pacjeta');
});

app.use('/', router);

module.exports = app;