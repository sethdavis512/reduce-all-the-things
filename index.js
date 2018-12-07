// .reduce() Workshop

// Utils
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

const numberArray = [12, 15, 30, 38, 10];

const hugeArray = Array(50000)
    .fill(null)
    .map(() => shapesArray[randomNumber(shapesArray.length)]);

const submissionData = require('./submissionData').default;
const sectionData = require('./sectionData').default;

// ================================================

// ANATOMY OF REDUCE

const reducerFunction = (accumulator, currentItem) => {
    console.log('currentItem', currentItem);
    return accumulator;
};
const initialValue = [];

const reducedShapesArr = shapesArray.reduce(reducerFunction, initialValue);

// const reducerFunction1 = (accumulator, currentItem) => {
//     console.log('\n');
//     console.log('currentItem', currentItem);
//     accumulator.push(currentItem);
//     console.log(accumulator);
//     return accumulator;
// };
// const initialValue1 = [];

// const reducedShapesArr1 = shapesArray.reduce(reducerFunction1, initialValue1);

// ================================================

// .map() vs. .filter() vs. .reduce()

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

// ================================================

// SPEED TEST

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

// ADDITION: ARRAY => NUMBER

// const sum = numberArray.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(sum);

// const crazyMath = numberArray.reduce((total, num) => {
//     return total + num * 25;
// }, 2000);

// console.log(crazyMath);

// ================================================

// REMOVE DUPLICATES: ARRAY => ARRAY

// const deDupedArray = duplicatesArray.reduce((deDuped, currentItem) => {
//     const hasType = item => item.type === currentItem.type;
//     if (!deDuped.find(hasType)) {
//         deDuped.push(currentItem);
//     }

//     return deDuped;
// }, []);

// console.log(duplicatesArray);
// console.log('\n');
// console.log(deDupedArray);

// ================================================

// VOTING: ARRAY => OBJECT

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

// GROUPING

// const groupedShapes = shapesArray.reduce((shapesObj, currentShape) => {
//     if (!shapesObj[currentShape.type]) {
//         shapesObj[currentShape.type] = [currentShape];
//     } else {
//         shapesObj[currentShape.type].push(currentShape);
//     }
//     return shapesObj;
// }, {});

// console.log(groupedShapes);

// const groupedShapesWithKeys = shapesArray.reduce(
//     (shapesObj, currentShape) => {
//         shapesObj[currentShape.type].push(currentShape);
//         return shapesObj;
//     },
//     {
//         CIRCLE: [],
//         SQUARE: [],
//         TRIANGLE: []
//     }
// );

// console.log(groupedShapesWithKeys);

// const scores = [
//     { id: 1, score: 80 },
//     { id: 2, score: 91 },
//     { id: 2, score: 77 },
//     { id: 4, score: 91 },
//     { id: 4, score: 95 },
//     { id: 1, score: 99 },
//     { id: 1, score: 60 },
//     { id: 3, score: 64 },
//     { id: 1, score: 91 },
//     { id: 3, score: 100 }
// ];

// const topScoresByGroup = (arr, groupNumber, numTopScores) => {
//     // Reduce items into specific groups
//     const groupedScores = arr.reduce((accumulator, currentValue) => {
//         const groupName = `group${currentValue.id}`;
//         const initialObject = {
//             average: 0,
//             topScores: [],
//             scores: []
//         };

//         if (accumulator[groupName] === undefined) {
//             accumulator[groupName] = initialObject;
//             accumulator[groupName].scores.push(currentValue.score);
//         } else {
//             accumulator[groupName].scores.push(currentValue.score);
//         }

//         return accumulator;
//     }, {});

//     // Sort each scores array. Add average score. Get topScores.
//     for (let group in groupedScores) {
//         // Find the average
//         const sumOfAllScores = groupedScores[group].scores.reduce(
//             (acc, cur) => acc + cur,
//             0
//         );
//         const numberOfScores = groupedScores[group].scores.length;
//         const averageScore = sumOfAllScores / numberOfScores;

//         // Round up and set value
//         groupedScores[group].average = Math.ceil(averageScore);

//         // Take numTopScores off of scores array, add to topScores
//         groupedScores[group].topScores = groupedScores[group].scores
//             .sort((a, b) => b - a)
//             .slice(0, numTopScores);
//     }

//     if (groupNumber) {
//         return groupedScores[`group${groupNumber}`];
//     }

//     return groupedScores;
// };

// // Get the top 3 scores for group 1
// console.log(topScoresByGroup(scores, 1, 3));
// // Give back all the grades for all groups
// console.log(topScoresByGroup(scores, null, 3));

// ================================================

// CONSTIUENT FORM DATA

// const flattenFieldsetsBySection = sections => {
//     return sections.reduce((panelDataArr, section) => {
//         if (section.pages.length > 0) {
//             const reducedFieldsets = section.pages.reduce(
//                 (fieldsetArr, page) => {
//                     if (page.fieldsets && page.fieldsets.length > 0) {
//                         page.fieldsets.forEach(fieldsetObj =>
//                             fieldsetArr.push({
//                                 label: fieldsetObj.label,
//                                 category: fieldsetObj.category
//                             })
//                         );
//                     }

//                     return fieldsetArr;
//                 },
//                 []
//             );

//             panelDataArr.push(reducedFieldsets);
//         }

//         return panelDataArr;
//     }, []);
// };

// console.log(flattenFieldsetsBySection(sectionData.displaySections));

// ================================================

// PIPING - REDUCE LEFT TO RIGHT

// const double = x => x + x;
// const triple = x => 3 * x;
// const quadruple = x => 4 * x;

// const pipe = (...fns) => input => [...fns].reduce((acc, fn) => fn(acc), input);

// const multiply6 = pipe(
//     double,
//     triple
// );
// const multiply9 = pipe(
//     triple,
//     triple
// );
// const multiply16 = pipe(
//     quadruple,
//     quadruple
// );
// const multiply24 = pipe(
//     double,
//     triple,
//     quadruple
// );

// console.log(multiply6(6));
// console.log(multiply9(9));
// console.log(multiply16(16));
// console.log(multiply24(10));

// ================================================

// COMPOSING - REDUCE RIGHT TO LEFT

// const saying = 'Reduce all the things';

// const scream = str => str.toUpperCase();
// const exclaim = str => `${str}!`;
// const repeat = str => `${str} ${str}`;
// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// const composeSaying = compose(
//     repeat,
//     exclaim,
//     scream
// );

// console.log(composeSaying(saying));

// ================================================

// COMPOSING PROMISES

// // Node Unhandled Rejection
// process.on('unhandledRejection', () => {});
// process.on('rejectionHandled', () => {});

// // Compose function
// const composePromise = (...fns) => initialValue =>
//     fns.reduceRight((res, fn) => Promise.resolve(res).then(fn), initialValue);

// const success1 = true;
// const success2 = true;
// const success3 = true;

// const delay = 500;

// // Create Promises
// const p1 = word => {
//     console.log('P1 fired');
//     return new Promise((resolve, reject) => {
//         if (success1) {
//             setTimeout(() => resolve(`${word} 1`), delay);
//         } else {
//             reject('P1 failed');
//         }
//     });
// };

// const p2 = word => {
//     console.log('P2 fired');
//     return new Promise((resolve, reject) => {
//         if (success2) {
//             setTimeout(() => resolve(`${word} 2`), delay);
//         } else {
//             reject('P2 failed');
//         }
//     });
// };

// const p3 = word => {
//     console.log('P3 fired');
//     return new Promise((resolve, reject) => {
//         if (success3) {
//             setTimeout(() => resolve(`${word} 3`), delay);
//         } else {
//             reject('P3 failed');
//         }
//     });
// };

// // Compose the Promises - Right to left
// const beautifulPromise = composePromise(p3, p2, p1);

// beautifulPromise('Count')
//     .then(res => console.log('SUCCESS!', res))
//     .catch(err => console.log(`########\n\n${err}\n\n########`));
