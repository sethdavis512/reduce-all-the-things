// Data
const { shapesArray } = require('./data');
const { spacer } = require('./utils');

// GROUPING
// Yet another useful way to use `.reduce()`
// Dynamically group items based on keys within an object.
const groupedShapes = shapesArray.reduce((shapesObj, currentShape) => {
    // If no shape type in accumulator...
    if (!shapesObj[currentShape.type]) {
        // Add it into a new array!
        shapesObj[currentShape.type] = [currentShape];
    } else {
        // If key does exist on accumulator, push to its array.
        shapesObj[currentShape.type].push(currentShape);
    }
    return shapesObj;
}, {});

console.log('GROUPED SHAPES');
console.log(groupedShapes);
console.log(spacer);

// We can create an `initialValue` to predefine groups
const shapeGroups = {
    CIRCLE: [],
    SQUARE: [],
    CHEESE: []
};

const groupedShapesWithKeys = shapesArray.reduce(
    (shapesObj, currentShape) => {
        // If group exists push it to the group's array
        if (shapesObj[currentShape.type]) {
            shapesObj[currentShape.type].push(currentShape)
        }
        return shapesObj;
    }, shapeGroups
);

console.log('PREDETERMINED GROUPS');
// CHEESE was not a shape, it will remain empty
console.log(groupedShapesWithKeys);
console.log(spacer);

// We'll apply the grouping concept to a real life situation
// We have a set of scores and we'll group them by groupNumber
const scores = [
    { groupNumber: 1, score: 80 },
    { groupNumber: 2, score: 91 },
    { groupNumber: 2, score: 77 },
    { groupNumber: 4, score: 91 },
    { groupNumber: 4, score: 95 },
    { groupNumber: 1, score: 99 },
    { groupNumber: 1, score: 60 },
    { groupNumber: 3, score: 64 },
    { groupNumber: 1, score: 91 },
    { groupNumber: 3, score: 100 }
];

const topScoresByGroup = (arr, groupNumber, numTopScores) => {
    // Reduce items into specific groups
    const groupedScores = arr.reduce((scores, student) => {
        const groupId = `group${student.groupNumber}`;
        const template = {
            average: 0,
            topScores: [],
            scores: []
        };

        if (scores[groupId] === undefined) {
            scores[groupId] = template;
            scores[groupId].scores.push(student.score);
        } else {
            scores[groupId].scores.push(student.score);
        }

        return scores;
    }, {});

    // Sort each scores array. Add average score. Get topScores.
    for (let group in groupedScores) {
        // Find the average (reduce to get the sum!)
        const sumOfAllScores = groupedScores[group].scores.reduce(
            (acc, cur) => acc + cur,
            0
        );
        const numberOfScores = groupedScores[group].scores.length;
        const averageScore = sumOfAllScores / numberOfScores;

        // Round up and set value
        groupedScores[group].average = Math.ceil(averageScore);

        // Take numTopScores off of scores array, add to topScores
        groupedScores[group].topScores = groupedScores[group].scores
            .sort((a, b) => b - a)
            .slice(0, numTopScores);
    }

    if (groupNumber) {
        return groupedScores[`group${groupNumber}`];
    }

    return groupedScores;
};

console.log('TOP SCORES BY GROUP NUMBER');
console.log(topScoresByGroup(scores, 1, 3));
console.log(spacer);

console.log('TOP SCORES BY GROUPS');
console.log(topScoresByGroup(scores, null, 2));