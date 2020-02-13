const express = require('express');
const app = express();


app.listen(80);

app.get('*/', function(req, res) {
    console.log("Privet")
    res.send("Welcome" + req.url)
})