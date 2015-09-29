var db = require('./db')

// MARK: - Utils

String.prototype.startsWith = function(needle) {
  return(this.indexOf(needle) == 0);
}

module.exports = [

// MARK: Brews

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

// MARK: Breweries

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
