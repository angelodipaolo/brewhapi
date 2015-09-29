
function mockBrewery(name) {
  return {
    name: name,
    id: name
  }
}

// Chocolate Peanut Butter Porter

var brews = [{
    name: "Limbo IPA",
    id: "1",
    style: "Imperial IPA",
    brewery: {
      name: "Long Trail Brewing Company",
      location: "Vermont"
    }
  }, {
    name: "Sweet Baby Jesus",
    id: "2",
    style: "Chocolate Peanut Butter Porter",
    brewery: {
      name: "DuClaw Brewing Company",
      location: "Baltimore, Maryland"
    }
  }, {
    name: "Blue Point Toasted Lager",
    id: "3",
    style: "American Amber Lager",
    brewery: {
      name: "Blue Point Brewing Company",
      location: "Long Island, New York"

    }
  }, {
    name: "Atwater Vanilla Java Porter",
    id: "4",
    style: "American Porter",
    brewery: {
      name: "Atwater Brewery",
      location: "Detroit, Michigan"
    }
  }, {
    name: "Stone Go To IPA",
    id: "5",
    style: "American IPA",
    brewery: {
      name: "Stone Brewing Co.",
      location: "Escondido, California"
    }
  }, {
    name: "Warlock",
    id: "6",
    style: "Imperial Pumpkin Stout",
    brewery: {
      name: "Southern Tier Brewing Company",
      location: "Lakewood, New York"
    }
  }, {
    name: "Shakespeare Outmeal Stout",
    id: "7",
    style: "Oatmeal Stout",
    brewery: {
      name: "Rogue Ales",
      location: "Newport, Oregon"
    }
  }, {
    name: "Founders Breakfast Stout ",
    id: "8",
    style: "Imperial Coffee Stout",
    brewery: {
      name: "Founders Brewing Company",
      location: "Grand Rapids, Michigan"
    }
  }
];

var breweries = [
  mockBrewery("Long Trail Brewing Company"),
  mockBrewery("Southern Tier Brewing Company"),
  mockBrewery("Atwater Brewery"),
  mockBrewery("Duclaw Brewing Company"),
  mockBrewery("Atwater Brewery")
];

exports.brews = brews
exports.breweries = breweries
