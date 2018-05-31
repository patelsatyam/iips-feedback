const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./feedback.html', null, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
    
}).listen(8080);
console.log('listning on port 8080');