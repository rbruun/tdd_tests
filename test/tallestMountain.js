var mountainFunctions = require('../mountainFunctions');

var chai = require('chai');
var expect = chai.expect;

describe('Tallest', function() {
  describe('tallest 1', function() {
    context('when heights are 1000, 2000, 500, 999', function() {
      it('returns 2000 for highest mountain', function() {
        var highest = mountainFunctions.tallestMountain([1000, 2000, 500, 999]);
        expect(highest).to.equal(2000);
      });
    });
  });

  describe('tallest 2', function() {
    context('when heights are 9999, 9998, 9997, 9999, 9996', function() {
      it('returns 9999 for highest mountain', function() {
        var highest = mountainFunctions.tallestMountain([9999, 9998, 9997, 9999, 9996]);
        expect(highest).to.equal(9999);
      });
    });
  });

    describe('shortest 1', function() {
    context('when heights are 9999, 9998, 9997, 9999, 9996', function() {
      it('returns 9996 for highest mountain', function() {
        var highest = mountainFunctions.shortestMountain([9999, 9998, 9997, 9999, 9996]);
        expect(highest).to.equal(9996);
      });
    });
  });
});