// COMPOSING PROMISES

// Node Unhandled Rejection
process.on('unhandledRejection', () => { });
process.on('rejectionHandled', () => { });

// Compose function
const composePromise = (...fns) => initialValue =>
    fns.reduceRight((res, fn) => Promise.resolve(res).then(fn), initialValue);

// Success toggles
const success1 = true;
const success2 = true;
const success3 = true;

// Simulate delayed API call
const delay = 1000;

// Create Promises
const p1 = word => new Promise((resolve, reject) => {
    if (success1) {
        // Simulate delayed API call
        setTimeout(() => {
            console.log('P1 success!');
            resolve(`${word} 1`)
        }, delay);
    } else {
        reject('P1 failed.');
    }
});

const p2 = word => new Promise((resolve, reject) => {
    if (success2) {
        // Simulate delayed API call
        setTimeout(() => {
            console.log('P2 success!');
            resolve(`${word} 2`)
        }, delay);
    } else {
        reject('P2 failed.');
    }
});

const p3 = word => new Promise((resolve, reject) => {
    if (success3) {
        // Simulate delayed API call
        setTimeout(() => {
            console.log('P3 success!');
            resolve(`${word} 3`)
        }, delay);
    } else {
        reject('P3 failed.');
    }
});

// Compose the Promises - Left to right
const composedPomise = composePromise(p3, p2, p1);

composedPomise('Count')
    .then(res => console.log('SUCCESS!', res))
    .catch(err => console.log(`########\n\n${err}\n\n########`));
