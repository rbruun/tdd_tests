var miscFunctions = require('../functions');
var chai = require('chai');
var expect = chai.expect;

describe('pigLatin()', function() {
  describe('convert phrase to pig latin', function() {
    context('when phrase is "good day"', function() {
      it('it returns "oodgay ayday"', function() {
        var result = miscFunctions.pigLatin("good day");
        expect(result).to.equal("oodgay ayday");
      });
    });

    context('when phrase is "take the dog for a walk"', function() {
      it('it returns "aketay ethay ogday orfay aay alkway"', function() {
        var result = miscFunctions.pigLatin("take the dog for a walk");
        expect(result).to.equal("aketay ethay ogday orfay aay alkway");
      });
    });
  });
});