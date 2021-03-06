var Hapi = require('hapi');
var _      = require('lodash');
var routes = require('./src/routes');

// MARK: - Create Server

var server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 8000
});

// MARK: - Configure Routing

routes.forEach(function(r) {
  server.route(r);
});

// MARK: - Start the Server

server.start(function() {
     console.log('Server running at:', server.info.uri);
});
