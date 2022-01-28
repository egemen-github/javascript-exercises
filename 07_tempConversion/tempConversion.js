const ftoc = function(F) {
  var C = (F - 32) * 5/9
  var result = Math.round(C * 10) / 10

  return result
};

const ctof = function(C) {
  var F = (C * 9/5) +32 
  var result = Math.round(F * 10) / 10
  return result
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
