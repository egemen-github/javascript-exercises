const repeatString = function(str, num) {
    let new_str = []
    let i = 0
    if (num<0) {
        return "ERROR"
    } else {

        while (i < num) {
            new_str.push(str);
            ++i;
        };
        return new_str.join("");
    }
};

// Do not edit below this line
module.exports = repeatString;
