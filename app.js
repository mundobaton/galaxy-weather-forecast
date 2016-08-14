var express = require('express');
var elasticsearch = require('elasticsearch');
var app = express();


app.get('/weatherforecast/dia/:diaId', function (req, res) {
	console.log("entra");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});