var reproduce = require('../cherokeeHare');
var chai = require('chai');
var expect = chai.expect;

describe('Population', function() {
  describe('Low reproduction rate', function() {
    context('when starting population is 200 and birth rate is .01 for 5 weeks', function() {
      it('returns 210 for ending population', function() {
        var population = reproduce(200, .01, 5);
        expect(population).to.equal(210);
      });
    });
  });

  describe('High reproduction rate', function() {
    context('when starting population is 200 and birth rate is .25 for 5 weeks', function() {
      it('returns 762 for ending population', function() {
        var population = reproduce(200, .25, 6);
        expect(population).to.equal(762);
      });
    });
  });
});