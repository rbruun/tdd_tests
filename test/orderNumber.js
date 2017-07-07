var hard = require('../hardFunctions');
var chai = require('chai');
var expect = chai.expect;

describe('descending()', function() {
  describe('return a number with digits in descending order', function() {
    context('when number is 382492', function() {
      it('returns 984322', function() {
        var answer = hard.descending(382492);
        expect(answer).to.equal(984322);
      });
    });

    context('when number is 12345678', function() {
      it('returns 87654321', function() {
        var answer = hard.descending(12345678);
        expect(answer).to.equal(87654321);
      });
    });
  });

});