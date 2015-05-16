var request = require('request');

var baseUri = 'https://pavlok.herokuapp.com/api/'
var type = {
  vibrate: 'vibrate',
  beep: 'beep',
  shock: 'shock',
  led: 'led'
}
var authentication = {};

var uriBuilder = function(t, v) {
  var uri = baseUri + authentication.objectId + '/' + type[t] + '/' + v;
  console.log(uri);
  return uri;
}

var vibrateDevice = function(power) {
  request(uriBuilder('vibrate', power), function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log('Vibrated at: ' + power);
    }
  });
};

var shockDevice = function(power) {
  request(uriBuilder('shock', power), function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log('Shocked at: ' + power);
    }
  });
};

var ledDevice = function(number) {
  request(uriBuilder('led', number), function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log('Blinked LEDs: ' + number);
    }
  });
};

var beepDevice = function(frequency) {
  request(uriBuilder('beep', frequency), function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log('Beeped at: ' + frequency);
    }
  });
};

module.exports = {
  init: function(auth) {
    authentication = auth;
  },
  vibrate: function(power) {
    vibrateDevice(power);
  },
  shock: function(power) {
    shockDevice(power);
  },
  blink: function(power) {
    ledDevice(power);
  },
  beep: function(frequency) {
    beepDevice(frequency);
  }
};
