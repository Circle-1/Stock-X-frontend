const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + '/index.js'));
app.use(cors());
app.get('/', (req, res) => {x
    res.sendFile(__dirname + '/index.js');
});

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.fields));
});

app.listen('10000', () => {
    console.log("Server listening to port 10000");
})