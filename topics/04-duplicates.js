const { prettyLog } = require('../utils/utilFunctions');

// Data
const { shapesArray } = require('../utils/data');

const duplicateShapesArray = [...shapesArray, ...shapesArray, ...shapesArray];
prettyLog('DUPLICATES', duplicateShapesArray);

// REMOVE DUPLICATES: ARRAY => ARRAY
// A very useful way to find unique items in array
const uniqueShapes = duplicateShapesArray.reduce((uniqueArr, currentItem) => {
    // Helper function
    const hasType = item => item === currentItem.type;
    // Leverage `.find()` to check the accumulator
    // for existing value. If its NOT there,
    // push it to the accumulator.
    const isUnique = !uniqueArr.find(hasType);
    if (isUnique) {
        uniqueArr.push(currentItem.type);
    }

    return uniqueArr;
}, []);
prettyLog('UNIQUE SHAPES', uniqueShapes);

// We can take this a step further and compose
// a function that returns unique values based on key.
const getUniqueByKey = (arr, targetKey) => {
    return arr.reduce((uniqueArr, currentItem) => {
        // Check to make sure the key exists on the `currentItem`
        if (currentItem[targetKey]) {
            // Check to see if there's already an item with that specific key value combo
            const isUnique = !uniqueArr.find(
                item => item === currentItem[targetKey]
            );
            if (isUnique) {
                uniqueArr.push(currentItem[targetKey]);
            }
        }

        return uniqueArr;
    }, []);
};
const uniqueColors = getUniqueByKey(duplicateShapesArray, 'color');
prettyLog('UNIQUE COLORS', uniqueColors);
