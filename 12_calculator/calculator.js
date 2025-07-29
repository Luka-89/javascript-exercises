const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let sum = 0;
  for(let num of a) sum += num;
  return sum;
};

const multiply = function(a) {
  let product = 1;
  for(let num of a) product *= num;
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let factorial = 1;
  for(let i = 1; i <= a; i++) factorial *= i;
  return factorial;
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
