var sinon = require('sinon'),
    request = require('request'),
    pavlok = require('./index.js');

var auth = {
  objectId: 'TEST'
};

var baseUri = 'https://pavlok.herokuapp.com';

var requestStub = sinon.stub(request, 'get')
  .yields(null, JSON.stringify({response: {statusCode: 200}}), null);

pavlok.init(auth);

describe('pavlok functionality', function() {
  beforeEach(function() {
    requestStub.reset();
  })

  it('beep', function() {
    pavlok.beep(100);
    sinon.assert.calledOnce(requestStub);
    sinon.assert.calledWith(
      requestStub,
      baseUri + '/api/TEST/beep/100'
    );
  });
  it('vibrate', function() {
    pavlok.vibrate(100);
    sinon.assert.calledOnce(requestStub);
    sinon.assert.calledWith(
      requestStub,
      baseUri + '/api/TEST/vibrate/100'
    );
  });
  it('shock', function() {
    pavlok.shock(255);
    sinon.assert.calledOnce(requestStub);
    sinon.assert.calledWith(
      requestStub,
      baseUri + '/api/TEST/shock/255'
    );
  });
  it('led', function() {
    pavlok.blink(2);
    sinon.assert.calledOnce(requestStub);
    sinon.assert.calledWith(
      requestStub,
      baseUri + '/api/TEST/led/2'
    );
  });
});
