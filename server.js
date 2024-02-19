console.log("Server is starting")

var express = require('express');

var app = express();

var server = app.listen(3000, listening)

app.get('/', (req,res) => {
    res.send("Hello node api")
})

function listening() {
    console.log("Listening...")
}

app.use(express.static('website'));