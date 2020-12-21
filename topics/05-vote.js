const { prettyLog } = require('../utils/utilFunctions');

// Data
const CHUYS = "Chuy's";
const P_TERRYS = 'P.Terrys';
const HULA_HUT = 'Hula Hut';

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

prettyLog('VOTES ARRAY', votesArray);
prettyLog('VOTE RESULTS', voteResult);
