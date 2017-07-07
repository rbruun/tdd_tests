var hard = require('../hardFunctions');
var chai = require('chai');
var expect = chai.expect;

describe('longx()', function() {
  describe('return longest string of "x"s in a string', function() {
    context('when string is "dkdkxxxxxdkdkxxxssxx', function() {
      it('returns 5', function() {
        var answer = hard.longx("dkdkxxxxxdkdkxxxssxx");
        expect(answer).to.equal(5);
      });
    });

    context('when string is "dkdkxxxxxdkdkxxxssxxxxxxx', function() {
      it('returns 7', function() {
        var answer = hard.longx("dkdkxxxxxdkdkxxxssxxxxxxxx");
        expect(answer).to.equal(8);
      });
    });
  });
});