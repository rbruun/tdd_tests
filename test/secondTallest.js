var miscFunctions = require('../functions');
var chai = require('chai');
var expect = chai.expect;

describe('SecondTallest()', function() {
  describe('what is second tallest mountain', function() {
    context('when mountain list is [500, 700, 244, 2444, 555]', function() {
      it('it returns 700 as the second tallest mountain', function() {
        var result = miscFunctions.secondLargest([500, 700, 244, 2444, 555]);
        expect(result).to.equal(700);
      });
    });

    context('when mountain list is [55, 555, 666, 6666, 4444]', function() {
      it('it returns 4444 as the second tallest mountain', function() {
        var result = miscFunctions.secondLargest([55, 555, 666, 6666, 4444]);
        expect(result).to.equal(4444);
      });
    });
  });
});