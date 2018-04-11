import {assert, expect} from 'chai';
import FizzBuzz from './FizzBuzz';

describe('getFizzbuzz', () => {
  [1,2, 4].forEach(function(value){
    it('should return ' +value+' for given an input of '+value, () => {
      var fizzy = new FizzBuzz();
      var result = fizzy.getFizzBuzz(value);
        // assert.equal(result,expected_result);  
         expect(result).to.eq(value.toString());
    })
  }) ;

  [3, 6, 9, 12].forEach(function(value){
    it('should return Fizz for given an input of '+value, () => {
      var fizzy = new FizzBuzz();
      var result = fizzy.getFizzBuzz(value);
        // assert.equal(result,expected_result);  
         expect(result).to.eq("Fizz");
    });
  });

    [5, 10, 20, 25].forEach(function(value){
      it('should return Buzz for given an input of '+value, () => {
        var fizzy = new FizzBuzz();
        var result = fizzy.getFizzBuzz(value);
          // assert.equal(result,expected_result);  
           expect(result).to.eq("Buzz");
      });
    });

    [15, 30, 45].forEach(function(value){
      it('should return FizzBuzz for given an input of '+value, () => {
        var fizzy = new FizzBuzz();
        var result = fizzy.getFizzBuzz(value);
          // assert.equal(result,expected_result);  
           expect(result).to.eq("FizzBuzz");
      });
    })
})