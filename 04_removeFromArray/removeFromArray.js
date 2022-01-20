const removeFromArray = function(...args) {
    var array = args.shift();
    var new_array = []
    
    for (let item of array) {
        for (let arg of args) {

            if ((!args.includes(item)) & (!new_array.includes(item))) {
                new_array.push(item)
                console.log(new_array)
            };

        };
    };
    return new_array
};
// Do not edit below this line
module.exports = removeFromArray;

