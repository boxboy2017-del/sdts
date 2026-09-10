const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
	response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
	response.end(JSON.stringify({
		message: 'Node.js 服务运行正常',
		path: request.url,
		method: request.method
	}));
});

server.listen(port, () => {
	console.log(`服务已启动：http://localhost:${port}`);
});
