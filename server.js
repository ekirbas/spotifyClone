
var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function () {
    console.log('listening on port ', server.address().port);
});

/* 
//https://www.codedisciples.in/react-deployment.html

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 */