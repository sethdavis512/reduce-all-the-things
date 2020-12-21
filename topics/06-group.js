const { prettyLog } = require('../utils/utilFunctions');

// Data
const { shapesArray, studentScores } = require('../utils/data');

// GROUPING 1 ==========
// Yet another useful way to use `.reduce()`
// Dynamically group items based on keys within an object.
const groupedShapes = shapesArray.reduce((shapesObj, currentShape) => {
    const upperCaseCurrentShape = currentShape.type.toUpperCase();
    // If no shape type in accumulator...
    if (!shapesObj[upperCaseCurrentShape]) {
        // Add it into a new array!
        shapesObj[upperCaseCurrentShape] = [currentShape];
    } else {
        // If key does exist on accumulator, push to its array.
        shapesObj[upperCaseCurrentShape].push(currentShape);
    }

    return shapesObj;
}, {});
prettyLog('GROUPED SHAPES BY TYPE', groupedShapes);

// GROUPING 2 ==========
// We can create an `initialValue` to pre-define groups
const shapeGroups = {
    CIRCLE: [],
    SQUARE: [],
    CHEESE: []
};
const groupedShapesWithKeys = shapesArray.reduce((shapesObj, currentShape) => {
    const upperCaseCurrentShape = currentShape.type.toUpperCase();
    // If group exists push it to the group's array
    if (shapesObj[upperCaseCurrentShape]) {
        shapesObj[upperCaseCurrentShape].push(currentShape);
    }

    return shapesObj;
}, shapeGroups);
prettyLog('PREDETERMINED GROUPS', groupedShapesWithKeys);

// GROUPING 3 ==========
// We'll apply the grouping concept to a real life situation
// We have a set of scores and we'll group them by groupNumber
const topScoresByGroup = (arr = [], groupNumber = null, numTopScores = 1) => {
    // Reduce items into specific groups
    const groupedScores = arr.reduce((scores, student) => {
        const groupId = `GROUP${student.groupNumber}`;
        const template = {
            average: 0,
            topScores: [],
            scores: []
        };

        const studentWithScore = {
            name: student.name,
            score: student.score
        }

        if (!scores[groupId]) {
            scores[groupId] = template;
            scores[groupId].scores.push(studentWithScore);
        } else {
            scores[groupId].scores.push(studentWithScore);
        }

        return scores;
    }, {});

    // Sort each scores array. Add average score. Get topScores.
    for (let group in groupedScores) {
        // Find the average (reduce to get the sum!)
        const sumOfAllScores = groupedScores[group].scores.reduce(
            (acc, cur) => acc + cur.score,
            0
        );
        const numberOfScores = groupedScores[group].scores.length;
        const averageScore = sumOfAllScores / numberOfScores;

        // Round up and set value
        groupedScores[group].average = Math.ceil(averageScore);

        // Take numTopScores off of scores array, add to topScores
        const sortedAndSliced = groupedScores[group].scores
            .sort((a, b) => b.score - a.score)
            .slice(0, numTopScores)
        groupedScores[group].topPerformer = sortedAndSliced[0];
        groupedScores[group].topScores = sortedAndSliced;
    }

    if (groupNumber) {
        return groupedScores[`GROUP${groupNumber}`];
    }

    return groupedScores;
};
prettyLog('TOP SCORES BY GROUPS', topScoresByGroup(studentScores, null, 2));
prettyLog('TOP SCORES IN GROUP 1', topScoresByGroup(studentScores, 1, 2));
