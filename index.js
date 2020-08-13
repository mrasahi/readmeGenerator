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
    {
        type: 'input',
        name: 'toc',
        message: 'Please enter a Table of Contents tab'
    },
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
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
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

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
