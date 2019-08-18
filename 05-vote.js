// Data
const { votesArray } = require('./data');
const { spacer } = require('./utils');

// VOTING: ARRAY => OBJECT
// For most of our previous examples,
// we've gone from array to an array as our output.
// This time we're going to have an object as our `initialValue`.
// We will use it to keep track of votes.
const voteResult = votesArray.reduce((voteTally, currentVote) => {
    if (voteTally[currentVote] === undefined) {
        voteTally[currentVote] = 1;
    } else {
        voteTally[currentVote] = voteTally[currentVote] + 1;
    }

    return voteTally;
}, {});

console.log('VOTE ARRAY');
console.log(votesArray);
console.log(spacer);

console.log('VOTE RESULTS');
console.log(voteResult);