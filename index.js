#!/usr/bin/env node
const fs = require('fs');
const inquirer = require('inquirer');
const shell = require('shelljs');

const reducedPaths = fs.readdirSync('./topics').reduce((paths, currentPath) => {
    if (currentPath.includes('.js')) {
        const [fileName] = currentPath.split('.');
        paths.push(fileName);
    }
    return paths;
}, []);

const askQuestions = () => {
    return inquirer.prompt([
        {
            choices: reducedPaths,
            message: 'Which file would you like to run?',
            name: 'TOPIC',
            type: 'list'
        }
    ]);
};

const init = async () => {
    const answers = await askQuestions();
    const { TOPIC } = answers;
    shell.exec(`nodemon ./topics/${TOPIC}.js`);
};

init();
