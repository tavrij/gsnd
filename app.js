var express = require('express');
var app = express();
var google = require('google');
app.get('/g/', function(reqq, ress) {
google.resultsPerPage = 100
var nextCounter = 0
var title = reqq.query.title;
		var results = Array();
google(title, function (err, res,links){
	if (err) console.error(err)


	for (var i = 0; i < res.links.length; ++i) {
		results.push(res.links[i])
		var link = res.links[i];
		/* console.log(link.title + ' - ' + link.href)
		console.log(link.description + "\n") */
		//console.log(results[i]);

	}

	if (nextCounter < 4) {
		nextCounter += 1
		if (res.next) res.next()
	}

		ress.json(results)	
	})

});
/* var port = process.env.PORT || 5000
var ip = process.env.IP || "127.0.0.1";

var server = app.listen(port, function () {
console.log('app listening at http://%s:%s', ip, port);
}); */