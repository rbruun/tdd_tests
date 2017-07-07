var isPalindrome = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('Is word a palindrome', function() {
  describe('is "racecar" a palindrome', function() {
    context('when word is "racecar"', function() {
      it('returns true', function() {
        var answer = isPalindrome("racecar");
        expect(answer).to.equal(true);
      });
    });
  });

  describe('is "annaconda" a palindrome', function() {
    context('when word is "annaconda"', function() {
      it('returns false', function() {
        var answer = isPalindrome("annaconda");
        expect(answer).to.equal(false);
      });
    });
  });
});