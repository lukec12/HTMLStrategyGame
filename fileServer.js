var express = require('express'),
	app = express();


app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080);

console.log("App listening on port 8080");
