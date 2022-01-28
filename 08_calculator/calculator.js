const add = function(...args) {
  var added = 0
	for (let i = 0; i < args.length; i++) {
    added += args[i];
  };
  return added
};

const subtract = function(...args) {
  var subtracted = 0;
  subtracted += args[0] - args[1];
  return subtracted;
};

const sum = function(A) {
  summed = 0
  if (A.length == 0) {
    return 0
  } else if (A.length === 1) {
    return A[0]
  } else if (A.length > 1) {
    for (let i = 0; i < A.length; i++) {
      summed += A[i];
    };
    return summed
  };
};

const multiply = function(A) {
  var multiplied = 1
  for (let i = 0; i < A.length; i++) {
    multiplied *= A[i];
  }
  return multiplied

};

const power = function(a, b) {
	// return Math.pow(a, b)
  var powered = 1
  for (let i = 0; i < b; i++) {
    powered *= a 
  }
  console.log(powered)
  return powered
};

const factorial = function(A) {
	if (A === 0) {
    return 1
  } else if (A === 1) {
    return 1
  } else if (A > 1) {
    var F = 1
    for (let i = 0; i < A; i++){
      console.log(i)
      console.log(A)
      F *= i+1 
    }
  }return F
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

// npm test calculator.spec.js