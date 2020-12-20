const { shapesArray } = require('../utils/data');

// IS IN ARRAY
// Use reduce to find objects in array.

const checkCircleReducer = (initialBoolean, currentItem) => {
    console.log(
        `'${currentItem.type}' === 'Circle':`,
        currentItem.type === 'Circle'
    );
    return initialBoolean || currentItem.type === 'Circle';
};
const hasCircle = shapesArray.reduce(checkCircleReducer, false);
console.log('hasCircle:', hasCircle);

// We can create a function to do this for use!
const isInArray = (itemsArray, checkKey, checkValue) => {
    return itemsArray.reduce((booleanValue, currentItem) => {
        return booleanValue || currentItem[checkKey] === checkValue;
    }, false);
};

const hasTriangle = isInArray(shapesArray, 'type', 'Triangle');
console.log('hasTriangle:', hasTriangle);

const hasColorRed = isInArray(shapesArray, 'color', 'Red');
console.log('hasColorRed:', hasColorRed);
