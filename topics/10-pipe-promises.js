const faker = require('faker');
const { prettyLog } = require('../utils/utilFunctions');

// PIPE PROMISES

// Node Unhandled Rejection
process.on('unhandledRejection', () => {});
process.on('rejectionHandled', () => {});

const pipePromise = (...fns) => initialValue =>
    fns.reduce((res, fn) => Promise.resolve(res).then(fn), initialValue);

const createPromise = (id, payload) => phrase =>
    new Promise((resolve, reject) => {
        const success = faker.random.number(10) > 1;
        if (success) {
            // Simulate delayed API call
            setTimeout(() => {
                const appended = `${phrase} ${payload}`;
                prettyLog(`PROMISE ${id}`, appended);
                // Send appended phrase to the next promise
                resolve(appended);
            }, 1000);
        } else {
            reject(`Promise ${id} failed.`);
        }
    });

// Promises
const p1 = createPromise('getAtoms', 'atoms,');
const p2 = createPromise('getMolecules', 'molecules,');
const p3 = createPromise('getOrganisms', 'organisms,');
const p4 = createPromise('getTemplates', 'templates,');

// Pipe the Promises - Left to right
const pipedPromise = pipePromise(p1, p2, p3, p4);

pipedPromise('Atomic Design:')
    .then(res => prettyLog('PIPED PROMISE SUCCESS', `${res} and pages.`))
    .catch(err => prettyLog('PIPED PROMISE ERROR', err));
