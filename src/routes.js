var db = require('./db')

module.exports = [

// MARK: Getting Brews

{
  method: 'GET',
  path:'/brews', 
  handler: function (request, reply) {
    db.connectAndFindBrews({}, function (err, brews) {
      reply({
        brews: brews
      });
    });

  }
},

// MARK: Adding a Brew

{
  method: 'POST',
  path:'/brews',
  handler: function (request, reply) {
    var brew = request.payload
    console.log('insert brew')
    console.log(brew)
    db.connectAndInsertBrew(brew, function (error, result) {
      if (error) { return reply(error).code(500); };

      reply().code(204);
    });
  }
},

// MARK: Getting Breweries

{
  method: 'GET',
  path:'/breweries', 
  handler: function (request, reply) {
    var q = request.query.q;

    db.connectAndFindBreweries({query: q}, function (err, breweries) {
      reply({
        breweries: breweries
      });
    });
  }
}

]
