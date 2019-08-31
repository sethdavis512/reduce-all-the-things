const { randomNumber } = require('./utils');

// Data
const Shapes = {
    CIRCLE: 'CIRCLE',
    SQUARE: 'SQUARE',
    TRIANGLE: 'TRIANGLE'
}

const Colors = {
    RED: 'Red',
    BLUE: 'Blue',
    GREEN: 'Green',
    YELLOW: 'Yellow',
    ORANGE: 'Orange'
}

const CHUYS = 'Chuy\'s';
const P_TERRYS = 'P.Terrys';
const HULA_HUT = 'Hula Hut';

const shapesArray = [
    { type: Shapes.CIRCLE, color: Colors.BLUE },
    { type: Shapes.SQUARE, color: Colors.RED },
    { type: Shapes.TRIANGLE, color: Colors.GREEN }
];

const duplicateShapesArray = [
    { type: Shapes.CIRCLE, color: Colors.BLUE },
    { type: Shapes.CIRCLE, color: Colors.RED },
    { type: Shapes.CIRCLE, color: Colors.GREEN },
    { type: Shapes.CIRCLE, color: Colors.BLUE },
    { type: Shapes.SQUARE, color: Colors.YELLOW },
    { type: Shapes.SQUARE, color: Colors.RED },
    { type: Shapes.TRIANGLE, color: Colors.BLUE },
    { type: Shapes.TRIANGLE, color: Colors.ORANGE }
];

const votesArray = [
    CHUYS,
    CHUYS,
    CHUYS,
    P_TERRYS,
    P_TERRYS,
    P_TERRYS,
    P_TERRYS,
    HULA_HUT,
    HULA_HUT
];

const numberArray = [12, 15, 30, 38, 10];

const hugeArray = Array(50000)
    .fill(null)
    .map(() => shapesArray[randomNumber(shapesArray.length)]);

const locations = {
    alpha: 'Rome',
    beta: 'London',
    charlie: 'Australia',
    delta: 'Mexico'
}

module.exports = {
    duplicateShapesArray,
    hugeArray,
    locations,
    numberArray,
    shapesArray,
    votesArray
};