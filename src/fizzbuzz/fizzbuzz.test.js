import {assert, expect} from 'chai';
import FizzBuzz from './FizzBuzz';

describe('getFizzbuzz', () => {
  it('returns 1', () => {
    var expected_result = 1;
    
    var newFizz = new FizzBuzz();

    var result = newFizz.getFizzBuzz(expected_result);
   // assert.equal(result,expected_result);  
    expect(result).to.eq(expected_result)  ;
  });

  it('returns 2', () => {
    var expected_result = 2;
    
    var newFizz = new FizzBuzz();

    var result = newFizz.getFizzBuzz(expected_result);
    assert.equal(result,expected_result);    
  });

  [3,6,9].forEach(function(value) {
      it('returns Fizz for number divisible by 3 ' + value, function() {
        var newFizz = new FizzBuzz();
        var result = newFizz.getFizzBuzz(value);
        assert.equal(result,"Fizz");    
      });
  });

  [5,10, 20].forEach(function(value) {
    it('returns Buzz for number divisible by 5' + value, function() {
      var newFizz = new FizzBuzz();
      var result = newFizz.getFizzBuzz(value);
      assert.equal(result,"Buzz");    
    });
  });

    [15,30, 45].forEach(function(value) {
      it('returns FizzBuzz for number divisible by 3 and 5' + value, function() {
        var newFizz = new FizzBuzz();
        var result = newFizz.getFizzBuzz(value);
        assert.equal(result,"FizzBuzz");    
      });
    });
})