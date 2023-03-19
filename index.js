const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
	if (req.url === '/friends') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(
			JSON.stringify({
				id: 1,
				name: 'Patrick',
			})
		);
	} else if (req.url === '/messages') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('this is another response');
	}
});

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
