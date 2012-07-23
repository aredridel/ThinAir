var http = require('http'),
    router = require('./router');
    
var requestHandler = function(req, res) {
    // sending request to router
    router.match(req, res);
};

requestHandler.setup = function(done) {
    // if it's called by node
    if (require.main != module) {
        // if ran from c9, use its port
        process.env.PORT = (process.env.C9_PORT != undefined) ? process.env.C9_PORT : process.env.PORT;

        // starts the server
        var server = http.createServer(requestHandler).listen(process.env.PORT, done);

        // socket.io initialization
        this.sockets.initialize(server);

        return console.log('ThinAir server listening on port ' + process.env.PORT);
    }
    done();
}

module.exports = requestHandler;