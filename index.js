// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a Title tab'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a Description tab'
    },
    // {
    //     type: 'input',
    //     name: 'toc',
    //     message: 'Please enter a Table of Contents tab'
    // },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter an Installation tab'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter a Usage tab'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a License',
        choices: ["None", "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Please enter a Contributors tab'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter a Test tab'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter a Questions tab'
    }
];

// Import thingy
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown.js')

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error) {console.log(error)})
}

// function to initialize program
function init() {
    inquirer
        // Question prompts
        .prompt(
            questions
        )
        // Results/answers from prompts
        .then(answers => {
            console.log(generateMarkdown(answers))
            
            writeToFile('README.md', generateMarkdown(answers))
        })
        // When things go south
        .catch(error => {
            console.log(error)
        })
}

// function call to initialize program
init();
