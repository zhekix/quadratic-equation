module.exports = function solveEquation(equation) {
  // your implementation

  let str = equation;

  str   = str.replace(/ /g,'');
  var parts = str.split('*x^2');
  var a = parts[0];

  var divider = '*x';
  var b = parts[1].split(divider)[0];
  var c = parts[1].split(divider)[1];

  var d = b*b - 4*a*c;
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
