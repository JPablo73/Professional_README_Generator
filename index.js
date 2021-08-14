const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

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
    },
];

// Writes README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

//Initializes application
function init() {
    inquirer.prompt(questions)
        //Writes file to README.md
        .then((data) => writeToFile('README.md', generateMarkdown(data)))

        .then(() => console.log("README.md genereted successfully."))

        .catch((err) => console.log(err))

}

init();
