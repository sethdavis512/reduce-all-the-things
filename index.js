// .reduce() Workshop

// Utils
const consoleSeparator = `\n${Array(50)
    .fill('=')
    .join('')}\n`;

const randomNumber = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

// Data
const shapesArray = [
    { type: 'CIRCLE', color: 'Blue' },
    { type: 'SQUARE', color: 'Red' },
    { type: 'TRIANGLE', color: 'Green' }
];

const duplicatesArray = [
    { type: 'CIRCLE', color: 'Blue' },
    { type: 'CIRCLE', color: 'Blue' },
    { type: 'CIRCLE', color: 'Blue' },
    { type: 'CIRCLE', color: 'Blue' },
    { type: 'SQUARE', color: 'Red' },
    { type: 'TRIANGLE', color: 'Green' }
];

const votesArray = [
    'Chuys',
    'P.Terrys',
    'P.Terrys',
    'P.Terrys',
    'Chuys',
    'Chuys',
    'P.Terrys',
    'Hula Hut'
];

const hugeArray = Array(50000)
    .fill(null)
    .map(() => shapesArray[randomNumber(shapesArray.length)]);

const submissionData = require('./submissionData').default;
const sectionData = require('./sectionData').default;

// ================================================

// 1. Anatomy of reduce

// const reducerFunction1 = (accumulator, currentItem) => {
//     console.log('currentItem', currentItem);
//     return accumulator;
// };
// const initialValue1 = [];

// const reducedShapesArr1 = shapesArray.reduce(reducerFunction1, initialValue1);
// console.log(consoleSeparator);

// ================================================

// 2. .map() vs. .filter() vs. .reduce()

// // Individual operations
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

// 4. Remove duplicates: Array => Array

// const deDupedArray = duplicatesArray.reduce((deDuped, currentItem) => {
//     const hasType = item => item.type === currentItem.type;
//     if (!deDuped.find(hasType)) {
//         deDuped.push(currentItem);
//     }

//     return deDuped;
// }, []);

// console.log(duplicatesArray);
// console.log(consoleSeparator);
// console.log(deDupedArray);

// ================================================

// 5. Voting: Array => Object

// const voteCount = votesArray.reduce((voteTally, currentItem) => {
//     if (voteTally[currentItem] === undefined) {
//         voteTally[currentItem] = 1;
//     } else {
//         voteTally[currentItem] = voteTally[currentItem] + 1;
//     }

//     return voteTally;
// }, {});

// console.log(voteCount);

// ================================================

// 6. Complex Data
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

// ================================================

// 7. Constiuent Form Data

const flattenFieldsetsBySection = sections => {
    return sections.reduce((panelDataArr, section) => {
        if (section.pages.length > 0) {
            const reducedFieldsets = section.pages.reduce(
                (fieldsetArr, page) => {
                    if (page.fieldsets && page.fieldsets.length > 0) {
                        page.fieldsets.forEach(fieldsetObj =>
                            fieldsetArr.push(fieldsetObj)
                        );
                    }

                    return fieldsetArr;
                },
                []
            );

            panelDataArr.push(reducedFieldsets);
        }

        return panelDataArr;
    }, []);
};

console.log(flattenFieldsetsBySection(sectionData.displaySections));
