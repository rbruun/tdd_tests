var changeMachine = require('../changeMachine');
var chai = require('chai');
var expect = chai.expect;

describe('Correct change', function() {
  describe('Change of 57', function() {
    context('when need change of 57', function() {
      it('it returns array of length 4', function() {
        var change = changeMachine(57);
        expect(change).to.have.lengthOf(4);
      });
    it('it returns array [2, 1, 1, 2]', function() {
        var change = changeMachine(57);
        expect(change).to.deep.equal([2, 1, 1, 2]);
      });
    });
  });

  describe('Change of 99', function() {
    context('when need change of 99', function() {
      it('it returns array of length 4', function() {
        var change = changeMachine(99);
        expect(change).to.have.lengthOf(4);
      });
    it('it returns array [4, 1, 1, 4]', function() {
        var change = changeMachine(99);
        expect(change).to.deep.equal([4, 1, 1, 4]);
      });
    });
  });
});