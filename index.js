#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

const filePaths = [
    '01-anatomy-of-reduce.js',
    '02-map-filter-reduce.js',
    '03-math.js',
    '04-duplicates.js',
    '05-vote.js',
    '06-group.js',
    '07-pipe-compose.js',
    '08-compose-promises.js'
];

const askQuestions = () => {
    return inquirer.prompt([
        {
            name: 'TOPIC',
            type: 'list',
            message: 'Which file would you like to run?',
            choices: filePaths
        }
    ]);
};

const init = async () => {
    const answers = await askQuestions();
    const { TOPIC } = answers;
    shell.exec(`nodemon ${TOPIC}`);
}

init();