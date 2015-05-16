var request = require('request');

var baseUri = 'https://pavlok.herokuapp.com/api/';
var type = {
  vibrate: 'vibrate',
  beep: 'beep',
  shock: 'shock',
  led: 'led'
};

var authentication = {};

var uriBuilder = function(t, v) {
  var uri = baseUri + authentication.objectId + '/' + type[t] + '/' + v;
  return uri;
};

var vibrateDevice = function(power) {
  request.get(uriBuilder('vibrate', power), function(error, response, body){
  });
};

var shockDevice = function(power) {
  request.get(uriBuilder('shock', power), function(error, response, body){
  });
};

var ledDevice = function(number) {
  request.get(uriBuilder('led', number), function(error, response, body){
  });
};

var beepDevice = function(frequency) {
  request.get(uriBuilder('beep', frequency), function(error, response, body){
  });
};

module.exports = {
  init: function(auth) {
    authentication = auth;
    return this;
  },
  vibrate: function(power) {
    vibrateDevice(power);
    return this;
  },
  shock: function(power) {
    shockDevice(power);
    return this;
  },
  blink: function(power) {
    ledDevice(power);
    return this;
  },
  beep: function(frequency) {
    beepDevice(frequency);
    return this;
  }
};
