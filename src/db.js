var mock = require('./mock')

exports.connectAndFindBrews = function (query, cb) {
  cb(null, mock.brews)
}

exports.connectAndFindBreweries = function (query, cb) {
  cb(null, mock.breweries)
}
