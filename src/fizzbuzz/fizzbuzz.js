class FizzBuzz {
    
    getFizzBuzz(input){

        return (input%3 == 0 && input % 5 == 0)?"FizzBuzz":(input%3==0?"Fizz":(input%5==0?"Buzz":input));
        // if (input%3 == 0 && input%5 == 0){return "FizzBuzz"}
        // if (input%3 == 0){return "Fizz"}
        // if (input%5 == 0){return "Buzz"}
        //return input;

    }
}

export default FizzBuzz;