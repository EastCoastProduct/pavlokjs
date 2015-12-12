[![Build Status](https://travis-ci.org/EastCoastProduct/pavlokjs.svg)](https://travis-ci.org/EastCoastProduct/pavlokjs)

pavlokjs
========================
JavaScript Wrapper for the Pavlok API

You want to use your pavlok in a cool way. Its only a simple call away.

Instalation
-----------
```shell
$ npm install pavlokjs
```

Usage
------
```javascript
var pavlok = require('pavlokjs');

// id is your pavlok id
pavlok.init({objectId: id});

pavlok.shock(strength);
// you can also chain them
pavlok.beep(frequency).shock(power);
```

Supported pavlok functions
--------------------------
For vibrate and shock, value is anywehre from 0-255. For beep and led, value is anywhere from 1-4.

    beep(frequency)
    blink(frequency)
    shock(power)
    vibrate(power)


Running tests
-------------

```shell
$ npm test
```

Small usage exmamples
--------------------
* [Used in express controller](https://github.com/EastCoastProduct/pavlok-hack-api/blob/master/src/controllers/pavloks/webhooks/index.js)
