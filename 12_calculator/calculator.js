const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product * num, 1);
};

const power = function(num, e) {
	return num ** e;
};

const factorial = function(num) {

  if(!Number.isInteger(num) || num < 0) throw Error("Invalid args!");

	let result = 1;

  for(let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
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
