const { prettyLog } = require('../utils/utilFunctions');

// Data
const { shapesArray } = require('../utils/data');

// IS IN ARRAY
// Use reduce to find objects in array.
const checkCircleReducer = (initialBoolean, currentItem) =>
    initialBoolean || (currentItem.type && currentItem.type === 'Circle');
const hasCircle = shapesArray.reduce(checkCircleReducer, false);
prettyLog('HAS CIRCLE', hasCircle);

// We can create a function to do this for us!
const isInArray = (itemsArray, checkKey, checkValue) => {
    return itemsArray.reduce((booleanValue, currentItem) => {
        if (currentItem[checkKey]) {
            return booleanValue || currentItem[checkKey] === checkValue;
        } else {
            return booleanValue;
        }
    }, false);
};
prettyLog('SHAPES ARRAY', shapesArray);

const hasTriangle = isInArray(shapesArray, 'type', 'Triangle');
prettyLog('HAS TRIANGLE', hasTriangle);

const hasRedShape = isInArray(shapesArray, 'color', 'Red');
prettyLog('HAS RED SHAPE', hasRedShape);
