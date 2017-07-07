var miscFunctions = require('../functions');
var chai = require('chai');
var expect = chai.expect;

describe('totalBill()', function() {
  describe('calculate bill with tip', function() {
    context('when bill is 13.42', function() {
      it('it returns 17', function() {
        var result = miscFunctions.totalBill(13.42);
        expect(result).to.equal(17);
      });
    });
    context('when bill is 123.84', function() {
      it('it returns 149', function() {
        var result = miscFunctions.totalBill(123.84);
        expect(result).to.equal(149);
      });
    });
  });
});