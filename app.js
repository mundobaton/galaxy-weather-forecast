var express = require('express');
var elasticsearch = require('elasticsearch');
var app = express();
var client = new elasticsearch.Client({
	host:'0.0.0.0:9200',
	log: 'trace'
});

app.get('/weatherforecast/dia/:diaId', function (req, res) {
	client.get({
		index: 'weatherforecast',
  		type: 'dia',
  		id: req.params.diaId
	}, function (error, response) {
		res.send(response._source);
	});
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});