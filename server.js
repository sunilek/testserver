var http = require('http');

var server = http.createServer(function(request, response) {
	console.log('received request')
	response.writeHead(200, {"Content-Type":"text/html"});
	//response.end("Hi Sunil");
    response.end(`
    	<!DOCTYPE html>
    	<html>
    		<head></head>
    			<title>Response in HTML</title>
    		<body>
    			<h1>Serving HTML</h1>
    			<p>Em babu laddu kavalaa...?</p>
    			<p>${request.url}</p>
    			<p>${request.method}</p>
    		</body>
    	</html>
    	`);
});

server.listen(3000);

console.log('server listening on port 3000');
