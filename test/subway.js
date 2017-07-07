var hard = require('../hardFunctions');
var chai = require('chai');
var expect = chai.expect;

describe('subway()', function() {
  describe('determine which location will produce most revenue', function() {
    context('when peeps = [5, 8, 4, 9, 1] and rent = [30, 14, 80, 61, 1]', function() {
      it('returns 1', function() {
        var answer = hard.subway([5, 8, 4, 9, 1], [30, 14, 80, 61, 1]);
        expect(answer).to.equal(2);
      });
    });

    context('when peeps = [5, 8, 4, 9, 100] and rent = [30, 14, 80, 61, 20]', function() {
      it('returns 1', function() {
        var answer = hard.subway([5, 8, 4, 9, 100], [30, 14, 80, 61, 20]);
        expect(answer).to.equal(5);
      });
    });

  });
});