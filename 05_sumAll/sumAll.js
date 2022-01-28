const sumAll = function(...args) {
    if ((args[0]>args[1]) & (args[1] > 0) & typeof(args[0])==="number") {
        var n = args[0]
    } else if ((args[1]>args[0]) & (args[0] > 0) & typeof(args[1])==="number") {
        var n = args[1]
    } else {
        return "ERROR"
    }
    var sum = ((n*(n+1))/2)
    return sum
}; 
// Do not edit below this line
module.exports = sumAll;
