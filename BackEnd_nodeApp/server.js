var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var messages = [{text: 'some text', owner: 'owner1'}, {text: 'some text 2', owner: 'owner2'}];

app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-type, Accept");
next();
});

// var api = express.Router();

app.get('/messages', (req, res)=>{
    res.json(messages);
});

app.post('/message', (req, res)=>{
    console.log(req.body);
    messages.push(req.body);
    res.sendStatus(200);
});

app.listen(3000);