#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

const filePaths = [
    '01-anatomy-of-reduce',
    '02-map-filter-reduce',
    '03-math',
    '04-duplicates',
    '05-vote',
    '06-group',
    '07-pipe-compose',
    '08-compose-promises',
    '09-object-to-array'
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
    shell.exec(`nodemon ${TOPIC}.js`);
}

init();