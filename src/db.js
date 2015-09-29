var mock = require('./mock')
var brews = mock.brews

exports.connectAndFindBrews = function (query, cb) {
  cb(null, brews)
}

exports.connectAndFindBreweries = function (query, cb) {
  cb(null, mock.breweries)
}

exports.connectAndInsertBrew = function (brew, cb) {
  brews.push(brew)
  cb(null, brew);
}
