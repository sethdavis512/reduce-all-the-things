const { prettyLog } = require('../utils/utilFunctions');

// PIPING - REDUCE LEFT TO RIGHT

// Piping is a very useful technique which allows
// the result of a function to be passed to another function
// multiple times.
// Instead of something like `a(b(c(x)))`, we can reduce
// or pipe those functions together.

// Generic functions
const double = x => x * 2;
const triple = x => x * 3;
const quadruple = x => x * 4;

// Variables
const pipeNumber = 6;
const saying = 'Reduce all the things';

// PIPE
const pipe = (...fns) => input => [...fns].reduce((acc, fn) => fn(acc), input);

// Pipe a function
// `double` will be called first, then
// `triple` will be called with the result of `double`
const multiply6 = pipe(
    double,
    triple
);
prettyLog('MULTIPLY BY 6', multiply6(6));

// `triple` will be called first, then
// `triple` will be called with the result of the first `triple`
const multiply9 = pipe(
    triple,
    triple
);
prettyLog('MULTIPLY BY 9', multiply9(6));

// `double` will be called first, then
// `triple` will be called with the result of `double`
// `quadruple` will be called with the result of `triple`
const multiply24 = pipe(
    double,
    triple,
    quadruple
);
prettyLog('MULTIPLY BY 24', multiply24(6));

// COMPOSE
// Same as pipe just starts from the right side of the array
const compose = (...fns) => input =>
    [...fns].reduceRight((acc, fn) => fn(acc), input);

// Generic functions
const lowercase = str => str.toLowerCase();
const replaceSpaces = str => str.replace(/\s+/g, '-');

// Compose a function
// `replaceSpaces` will be called first, then
// `lowercase` will be called with the result of `replaceSpaces`
const kebabCase = compose(
    lowercase,
    replaceSpaces
);
const kebabCased = kebabCase(saying);
prettyLog('SAYING - KEBAB CASED', kebabCased);

// Another string manipulation example
const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const composeSaying = compose(
    repeat,
    exclaim,
    scream
);
const composedSaying = composeSaying(saying);
prettyLog('SAYING - COMPOSED', composedSaying);
