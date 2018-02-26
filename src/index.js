const math = require('./math');

module.exports = function solveEquation(equation) {
  // your implementation

  let str = equation;

  str   = str.replace(/ /g,'');
  var a = str.split('*x^2')[0];
  var b = str.split('*x^2')[1].split('*x')[0];
  var c = str.split('*x^2')[1].split('*x')[1];
  // var coef    = math.rationalize(equation,{},true).coefficients;
  // var a       = coef[2], b = coef[1], c = coef[0];
  var d       = b*b - 4*a*c;
  var solutions = [];
  solutions.push( Math.round( ( -b + Math.sqrt(d) )/(2*a) ) );
  solutions.push( Math.round( ( -b - Math.sqrt(d) )/(2*a) ) );
  solutions.sort(compareNumeric);

  return solutions;
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
