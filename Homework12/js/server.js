// Server
const http = require("http");

const voteText = `Your vote is accepted ${new Date()}`;

http.createServer( function(request, response) {
    response.writeHead(200, {'Access-Control-Allow-Origin': '*'});

    response.end(voteText);
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');

