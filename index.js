// .reduce() Workshop

// Utils
const consoleSeparator = Array(50)
    .fill('=')
    .join('');

const randomNumber = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

// Data
const shapesArray = [
    { type: 'CIRCLE', color: 'Blue' },
    { type: 'SQUARE', color: 'Red' },
    { type: 'TRIANGLE', color: 'Green' }
];

const hugeArray = Array(50000)
    .fill(null)
    .map(() => shapesArray[randomNumber(shapesArray.length)]);

const submissionData = require('./mockSubmission').default;

// ================================================

// 1. Anatomy of reduce

const reducerFunction1 = (accumulator, currentItem) => {
    console.log('currentItem', currentItem);
    return accumulator;
};
const initialValue1 = [];

const reducedShapesArr1 = shapesArray.reduce(reducerFunction1, initialValue1);

// ================================================

// 2. .map() vs. .filter() vs. .reduce()

// Individual operations
// const mappedShapesArray2 = shapesArray.map((shape, index) => ({
//     ...shape,
//     id: index
// }));

// const filteredShapesArray2 = shapesArray.filter(
//     shape => shape.type !== 'SQUARE'
// );

// console.time('Map & Filter 2');
// // Chained methods
// const mappedAndFilteredShapesArray2 = shapesArray
//     .map((shape, index) => ({
//         ...shape,
//         id: index
//     }))
//     .filter(shape => shape.type !== 'SQUARE');
// console.timeEnd('Map & Filter 2');

// console.time('Reduce 2');
// const reducedShapesArr2 = shapesArray.reduce(
//     (accumulator, currentItem, index) => {
//         if (currentItem.type !== 'SQUARE') {
//             currentItem.id = index;
//             accumulator.push(currentItem);
//         }

//         return accumulator;
//     },
//     []
// );
// console.timeEnd('Reduce 2');

// console.log(consoleSeparator);

// ================================================

// 3. Speed Test

// console.time('Map & Filter 3');
// const mappedAndFilteredShapesArray3 = hugeArray
//     .map((shape, index) => ({
//         ...shape,
//         id: index
//     }))
//     .filter(shape => shape.type !== 'SQUARE');
// console.timeEnd('Map & Filter 3');

// console.time('Reduce 3');
// const reducedShapesArr3 = hugeArray.reduce(
//     (accumulator, currentItem, index) => {
//         if (currentItem.type !== 'SQUARE') {
//             currentItem.id = index;
//             accumulator.push(currentItem);
//         }

//         return accumulator;
//     },
//     []
// );
// console.timeEnd('Reduce 3');

// ================================================

// 4. Complex Data
// Use .reduce(), .map(), and .filter() together

// const { paymentSummaryList } = submissionData;

// const reducedPaymentSummary = paymentSummaryList.reduce(
//     (paymentObj, currentPayment) => {
//         const fees = currentPayment.feeLineitemCollectedSummaryList.map(
//             item => {
//                 const { id, price, sku } = item;
//                 return {
//                     id,
//                     price,
//                     sku,
//                     label: item.displayLabel,
//                     type: item.feeType,
//                     order: item.displayOrder
//                 };
//             }
//         );

//         // If more than one paymentObj
//         if (paymentObj.fees) {
//             paymentObj.fees = [...paymentObj.fees, ...fees];
//         } else {
//             paymentObj.fees = fees;
//         }

//         return paymentObj;
//     },
//     {}
// );

// console.log(reducedPaymentSummary);
