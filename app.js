let express = require('express');
let app = express();
let google = require('google');
app.get('/g/', function(reqq, ress) {
google.resultsPerPage = 100
let nextCounter = 0
let title = reqq.query.title;
		let results = Array();
google(title, function (err, res,links){
	//if (err) console.error(err)


	for (let i = 0; i < res.links.length; ++i) {
		results.push(res.links[i])
		let link = res.links[i];
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
let port = process.env.PORT || 5000
let ip = process.env.IP || "127.0.0.1";

let server = app.listen(port, function () {
console.log('app listening at http://%s:%s', ip, port);
});