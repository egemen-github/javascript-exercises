const fibonacci = function(input) {

    // Checks if it is number, if not it will make it integer.

    if (typeof input === "number") {
        num = input
    } else {
        num = parseInt(input)
    }

    // Uses the given input.

    function fib(num) {
        var fib_array = [0, 1, 1, 2]
        
        if (num < 0) {
            return "OOPS"
        } else if (num > 3) {
            for (let i = 4; i <= num; i++) {
               value = fib_array[i-1] + fib_array[i-2]
               fib_array.push(value)
            }; return fib_array[num]

        } else if (1 <= num <= 4) {
            return fib_array[num]
        };
    }; 
    return fib(num)    
};

// Do not edit below this line
module.exports = fibonacci;
