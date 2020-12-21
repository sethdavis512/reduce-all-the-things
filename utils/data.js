const faker = require('faker');
const { randomNumber } = require('../utils/utilFunctions');

// Data
const shapesArray = [
    { type: 'Circle', color: 'Blue' },
    { type: 'Square', color: 'Red' },
    { type: 'Triangle', color: 'Green' }
];

const hugeArray = Array(50000)
    .fill(null)
    .map(() => shapesArray[randomNumber(shapesArray.length)]);

const schedule = {
    january: {
        location: faker.address.country()
    },
    february: {
        location: faker.address.country()
    },
    march: {
        location: faker.address.country()
    }
};

const studentScores = Array(20)
    .fill(null)
    .map(_ => ({
        name: faker.name.findName(),
        groupNumber: faker.random.number(3) + 1,
        score: faker.random.number({
            min: 50,
            max: 100
        })
    }));

module.exports = {
    hugeArray,
    schedule,
    shapesArray,
    studentScores
};
