var miscFunctions = require('../functions');
var chai = require('chai');
var expect = chai.expect;

describe('containsVowel()', function() {
  describe('Does a word contain a vowel', function() {
    context('when the word is "ample"', function() {
      it('it returns true', function() {
        var result = miscFunctions.containsVowel("ample");
        expect(result).to.equal(true);
      });
    });

    context('when the word is "dkdkdkdk"', function() {
      it('it returns false', function() {
        var result = miscFunctions.containsVowel("dkdkdkdk");
        expect(result).to.equal(false);
      });
    });

    context('when the word is "AAdddd"', function() {
      it('it returns true', function() {
        var result = miscFunctions.containsVowel("AAddd");
        expect(result).to.equal(true);
      });
    });

    context('when the word is "Edddd"', function() {
      it('it returns true', function() {
        var result = miscFunctions.containsVowel("Eddd");
        expect(result).to.equal(true);
      });
    });

    context('when the word is "Idddd"', function() {
      it('it returns true', function() {
        var result = miscFunctions.containsVowel("Iddd");
        expect(result).to.equal(true);
      });
    });

    context('when the word is "Odddd"', function() {
      it('it returns true', function() {
        var result = miscFunctions.containsVowel("Oddd");
        expect(result).to.equal(true);
      });
    });
    
    context('when the word is "Udddd"', function() {
      it('it returns true', function() {
        var result = miscFunctions.containsVowel("Uddd");
        expect(result).to.equal(true);
      });
    });
  });
});