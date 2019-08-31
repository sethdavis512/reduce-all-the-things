// Data
const { numberArray } = require('../utils/data');

// ADDITION: ARRAY => NUMBER

// Reduce is great for mathematical operations
// We start with zero as the initial value
// and add each number in the array to zero.
const addFunction = (total, num) => {
    return total + num;
};
const sum = numberArray.reduce(addFunction, 0);
console.log('sum:', sum);

const subtractFunction = (total, num) => {
    return total - num;
};
const difference = numberArray.reduce(subtractFunction, 0);
console.log('difference:', difference);

// You can throw in all sorts of math...
const crazyMath = numberArray.reduce((total, num) => {
    return total + num * 25;
}, 0);
console.log('crazyMath:', crazyMath);
