// Data
const { duplicateShapesArray } = require('../utils/data');
const { spacer } = require('../utils/utilFunctions');

// REMOVE DUPLICATES: ARRAY => ARRAY
// A very useful way to find unique items in array
const uniqueShapes = duplicateShapesArray.reduce((uniqueArr, currentItem) => {
    // Helper function
    const hasType = item => item.type === currentItem.type;
    // Leverage `.find()` to check the accumulator
    // for existing value. If its NOT there,
    // push it to the accumulator.
    const isUnique = !uniqueArr.find(hasType);
    if (isUnique) uniqueArr.push(currentItem);
    return uniqueArr;
}, []);

console.log('DUPLICATES');
console.log(duplicateShapesArray);
console.log(spacer);

console.log('UNIQUE SHAPES');
console.log(uniqueShapes);
console.log(spacer);

// We can take this a litte further and compose
// a function that returns unique values based on key.
const uniqueArrByKey = (arr, targetKey) => {
    return arr.reduce((uniqueArr, currentItem) => {
        const hasType = item => item[targetKey] === currentItem[targetKey];
        const isUnique = !uniqueArr.find(hasType);
        if (isUnique) uniqueArr.push(currentItem);
        return uniqueArr;
    }, []);
};
const uniqueColors = uniqueArrByKey(duplicateShapesArray, 'color');

console.log('UNIQUE COLORS');
console.log(uniqueColors);
