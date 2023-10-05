//require("@fatso83/mini-mocha").install();

const sinon = require("sinon");
//const referee = require("@sinonjs/referee");
const assert = require("assert")


it('should pass object with correct values to save', function() {
  var save = sinon.stub(Database, 'save');
  var info = { name: 'test' };
  var expectedUser = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

  setupNewUser(info, function() { });

  save.restore();
  sinon.assert.calledWith(save, expectedUser);
});
