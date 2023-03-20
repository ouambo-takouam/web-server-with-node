const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
	{
		id: 0,
		name: 'Patrick',
	},
	{
		id: 1,
		name: 'Eunice',
	},
];

server.on('request', (req, res) => {
	const items = req.url.split('/');
	// /friends/2 => ['', 'friends', '2']

	if (req.method === 'POST' && items[1] === 'friends') {
		req.on('data', (buffer) => {
			const friend = buffer.toString();
			console.log('Request: ', friend);
			friends.push(JSON.parse(friend));
		});
	} else if (req.method === 'GET' && items[1] === 'friends') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');

		if (items.length === 3) {
			res.end(JSON.stringify(friends[+items[2]]));
		} else {
			res.end(JSON.stringify(friends));
		}
	} else if (req.method === 'GET' && items[1] === 'messages') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('this is another response');
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
