var Hapi = require('hapi');
var _      = require('lodash');
var routes = require('./src/routes');

// MARK: - Create Server

var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// MARK: - Configure Routing

routes.forEach(function(r) {
  server.route(r);
});

// MARK: - Spawn the Server

server.start(function() {
     console.log('Server running at:', server.info.uri);
});
