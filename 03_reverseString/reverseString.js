const reverseString = function(str) {
    var array = []
    for(i in str) {
    	array.push(str[i])
    };
    array.reverse()
    result = array.join("")
    return result
};

// Do not edit below this line
module.exports = reverseString;
