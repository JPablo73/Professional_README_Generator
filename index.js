const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');

//Question array for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instruction on how the app is used'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installations required for the app'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to run tests for this app'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide any instruction for contributing to this app'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a licence for this project',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Please provide your GitHub username'
    }
];

// Writes README file
function writeToFile(fileName, data) {
    // writes responses to the markdown file
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`README.md file has been created.`)
    );
};

//Initializes application
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        // Displays answers to questions
        console.log(answers);
        // Creates the markdown file based on user input
        writeToFile('Sample_README.md', data);
    })
}

init();
