var countLetters = require('../hangman');
var chai = require('chai');
var expect = chai.expect;

describe('Letters exist', function() {
  describe('is "o" in "alcohol', function() {
    context('when word is "alcohol" and letter is "o"', function() {
      it('returns 2 for number of times letter occurs', function() {
        var count = countLetters("alcohol", "o");
        expect(count).to.equal(2);
      });
    });
  });

  describe('is "a" in "aaaa', function() {
    context('when word is "aaaa" and letter is "a"', function() {
      it('returns 4 for number of times letter occurs', function() {
        var count = countLetters("aaaa", "a");
        expect(count).to.equal(4);
      });
    });
  });

  describe('is "o" in "o', function() {
    context('when word is "o" and letter is "o"', function() {
      it('returns 1 for number of times letter occurs', function() {
        var count = countLetters("o", "o");
        expect(count).to.equal(1);
      });
    });
  });
});