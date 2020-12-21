const { prettyLog } = require('../utils/utilFunctions');

// Data
const numberArray = [12, 15, 30, 38, 10];

// Reduce is great for mathematical operations
// We start with zero as the initial value
// and add each number in the array to zero.
const addReducer = (total, num) => total + num;
const sum = numberArray.reduce(addReducer, 0);
prettyLog('SUM', sum);

const subtractReducer = (total, num) => total - num;
const difference = numberArray.reduce(subtractReducer, 0);
prettyLog('DIFFERENCE', difference);

const multiplicationReducer = (total, num) => total * 2;
const product = numberArray.reduce(multiplicationReducer, 0);
prettyLog('PRODUCT', product);

const customReducer = (total, num) => total + (num * 25);
const customMath = numberArray.reduce(customReducer, 0);
prettyLog('CUSTOM MATH', customMath);
