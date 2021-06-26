// TODO: Include packages needed for this application
const fs = require( "fs" );
const inquirer = require( "inquirer" );
const generateMarkdown = require("./generateMarkdown");



const questions = [
    {
        type: 'input',
        message: 'Please enter your project title.',
        name: 'title',
    },
    {
        type: 'editor',
        message: 'Please provide a description of your project',
        name: 'description',        
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',        
    },
    {
        type: 'input',
        message: 'What are some examples of how your project can be used?',
        name: 'usage',        
    },
    {
        type: 'list',
        message: 'Which license would you like to use for this project?',
        name: 'license',  
        choices: ["Apache", "GNU", "MIT", "Eclipse", "none"],      
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contributing',        
    },
        {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'tests',        
    },
    {
        type: 'input',
        message: 'What email can you be reached at for additional questions?',
        name: 'questions',        
    },
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'githubUserName',        
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, function(error){
        if(error) throw error;
        console.log("file generated");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        const reply = generateMarkdown(response);

console.log(reply);
writeToFile("README.md",reply)
    })
}


// Function call to initialize app
init();


// (https://img.shields.io/badge/license-${response.license}-blue.svg)