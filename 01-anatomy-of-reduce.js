// Data
const { shapesArray } = require('./data');
const { line, spacer } = require('./utils');

// ANATOMY OF REDUCE
// Reduce takes two arguments

// 1. First argument to `.reduce()` is a reducer function
//    - It gets called on each item of the array
//    - Within this function we can pass a total of four arguments
//        - Accumulator
//        - Current Item
//        - Current Index (optional)
//        - Source Array (optional)
const reducerFunction = (accumulator, currentItem, currentIndex, sourceArray) => {
    // Lets see what we're working with...
    console.log('ITEM NUMBER: ', currentIndex);
    console.log(line);
    console.log('accumulator: ', accumulator);
    console.log('currentItem: ', currentItem);
    console.log('currentIndex: ', currentIndex);
    console.log('sourceArray: ', sourceArray);
    console.log(spacer);

    // Always return the accumulator!
    return accumulator;
};

// 2. Initial value - usually an empty array, empty object, or empty string
//    - Value is optional. If no `initialValue` given, `.reduce()` will use first item in array.
const initialValue = [];

// `reducedShapesArr` return as an empty array
//  We aren't telling reduce to do anything with the accumulator (initialValue).
const reducedShapesArr = shapesArray.reduce(reducerFunction, initialValue);
console.log('reducedShapesArr: ', reducedShapesArr);
