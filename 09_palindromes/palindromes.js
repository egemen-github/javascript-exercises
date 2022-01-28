const palindromes = function (x) {
    console.log("original: ", x)
    lowered = x.toLowerCase();
    console.log("lowered: " ,lowered)

    var purified = lowered.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, '');
    console.log("purified: ", purified)

    var array = []
    for(i in purified) {
    	array.push(purified[i])
    };

    console.log("array: ", array)
    array.reverse()
    reversed = array.join("")

    if (reversed === purified) {
        console.log("reversed: ",reversed)
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
