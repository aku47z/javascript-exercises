const add = function(...num) {
	return num.reduce((sum, num) => sum + num);
};

const subtract = function(...num) {
	return num.reduce((diff, num) => diff - num);
};

const sum = function(num) {
	return num.reduce((total, current) => total + current, 0);
};

const multiply = function(num) {
  return num.reduce((prod, current) => prod * current);
};

const power = function(...num) {
	return num.reduce((pow, num) => pow ** num);
};

const factorial = function(num) {
    return (num < 2) ? 1 : num * factorial(num - 1);
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
