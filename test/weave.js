var miscFunctions = require('../functions');
var chai = require('chai');
var expect = chai.expect;

describe('weave()', function() {
  describe('replace every xth character with "x"', function() {
    context('when phrase is "good day" 3', function() {
      it('it returns "goxd xay"', function() {
        var result = miscFunctions.weave("good day", 3);
        expect(result).to.equal("goxd xay");
      });
    });

    context('when phrase is "good day" 10', function() {
      it('it returns "good day"', function() {
        var result = miscFunctions.weave("good day", 10);
        expect(result).to.equal("good day");
      });
    });

    context('when phrase is "good day" 2', function() {
      it('it returns "gxox xax"', function() {
        var result = miscFunctions.weave("good day", 2);
        expect(result).to.equal("gxox xax");
      });
    });

    context('when phrase is "good day" 1', function() {
      it('it returns "xxxxxxxx"', function() {
        var result = miscFunctions.weave("good day", 1);
        expect(result).to.equal("xxxxxxxx");
      });
    });
  });
});