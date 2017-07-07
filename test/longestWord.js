var miscFunctions = require('../functions');
var chai = require('chai');
var expect = chai.expect;

describe('longestWord()', function() {
  describe('Return longest word in a phrase', function() {
    context('when phrase is "have you ever seen a penguin go to tea?"', function() {
      it('it returns "penguin"', function() {
        var result = miscFunctions.longestWord("have you ever seen a penguin go to tea?");
        expect(result).to.equal("penguin");
      });
    });

    context('when phrase is "fool me once, shame on me. fool me twice, shame on heathcliff"', function() {
      it('it returns "heathcliff"', function() {
        var result = miscFunctions.longestWord("fool me once, shame on me. fool me twice, shame on heathcliff.");
        expect(result).to.equal("heathcliff");
      });
    });

    context('when phrase is "have you ever seen a penguin go to tea doobies?"', function() {
      it('it returns "penguin"', function() {
        var result = miscFunctions.longestWord("have you ever seen a penguin?? go to tea doobies?");
        expect(result).to.equal("penguin");
      });
    });
  });
});