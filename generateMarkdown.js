// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license = "none"){
    return ''
  } else {
    return `(https://img.shields.io/badge/license-${response.license}-blue.svg)`}
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license = "none"){
    return ''
  } else {
    return `*[License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license = "none"){
    return ''
  } else {
    return `
    
    ## License
    ![Github License] ${renderLicenseBadge}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

<!-- ![ALT](/path/​image.ext) -->
<!-- [LINK NAME](https://www.linkaddress) -->

## Table of Contents
* [Description](#description)
* [Contributing](#contributing)
* [Installation](#installation)
* [Test](#test)
* [Usage](#usage)
* [Contributing](#contributing)
${renderLicenseLink()}
* [GitHub](#githubUserName)
* [Contact](#contact)

## Installation
${response.installation}

## Usage
${response.usage}

## Description 
${response.description}


## Contributing
${response.contributing}


## Test
${response.tests}
${renderLicenseSection()}
## Contributing
${response.contributing}

## Contact
if you have any questions feel free to reach out by email ${response.questions} or visit my [Github](https://github.com/${response.githubUserName})
`;
}


module.exports = generateMarkdown;
