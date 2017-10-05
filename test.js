var assert = require('assert');
var chain = require('./index');

var testObj = {
  code: 200,
  data: {
    list: [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' }
    ],
    page: {
      current: 1,
      total: 200
    }
  }
};

describe('explicit path', function() {
  it('should return 200 with path: \'.code\'', function() {
    assert.equal(200, chain(testObj, '.code'));
  });

  it('should return 1 with path: \'.data.page.current\'', function() {
    assert.equal(1, chain(testObj, '.data.page.current'));
  });

  it('should return 1 with path: \'.data.list[0].id\'', function() {
    assert.equal(1, chain(testObj, '.data.list[0].id'));
  });
});

describe('wrong path', function() {
  it('should return undefined with path: \'.wrong.path\'', function() {
    assert.equal(undefined, chain(testObj, '.wrong.path'));
  });

  it('should return 666 with path: \'.wrong.path\'', function() {
    assert.equal(666, chain(testObj, '.wrong.path', 666));
  });
});
