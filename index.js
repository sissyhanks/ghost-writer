// TODO: Include packages needed for this application
const fs = require( "fs" );
const inquirer = require( "inquirer" );


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled description, , , , , , 
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create an array of questions for user input

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
        type: 'editor',
        message: 'What are the installation instructions for your project?',
        name: 'installation',        
    },
    {
        type: 'editor',
        message: 'What are some examples of how your project can be used?',
        name: 'usage',        
    },
    {
        type: 'list',
        message: 'Which license would you like to use for this project?',
        name: 'license',  
        choices: ["Apache", "GNU General Public License", "MIT", "Eclipse"],      
    },
    {
        type: 'editor',
        message: 'What are the contribution guidelines for this project?',
        name: 'contributing',        
    },
        {
        type: 'editor',
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
        const reply = `
# ${response.title} 


## Table of Contents
* [Description](#description)
* [Contributing](#contributing)
* [Installation](#installation)
* [Test](#test)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [GitHub](#githubUserName)
* [Contact](#contact)

## Description 
${response.description}


## Contributing



## Test
## Installation
## Usage
## Contributing
## License
![Github License](https://img.shields.io/badge/${response.license}-blue.svg)


## GitHub 
###### check teh folloing for profile [Github](https://github.com/${response.githubUserName})

## Contact
if you have any questions feel free to reach out by email ${response.questions}
`
console.log(reply);
writeToFile("README.md",reply)
    })
}

// Function call to initialize app
init();
