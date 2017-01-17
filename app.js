var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var api = require('./routes/api');
app.use('/', api.index);
app.use('/contributors', api.contributors);

app.listen(port);
console.log('Play with GitHub API running on ' + port);