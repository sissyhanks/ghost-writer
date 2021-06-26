// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (key == 'none') {
    return '';
  } else {
    return `![BADGE](https://img.shields.io/badge/license-`+ key +`-blue.svg)`;
  }
  }

  function renderLicenseInfo(license) {
  if (key == 'none') {
    return '';
  } else if (key = 'Apache') {
      return 'This project (and all code) is licensed under the [Apache license](https://opensource.org/licenses/Apache-2.0)'
  } else if (key = 'GNU') {
      return 'This project (and all code) is licensed under the [GNU license](https://opensource.org/licenses/gpl-license)'
  } else if (key = 'MIT') {
      return 'This project (and all code) is licensed under the [MIT license](https://opensource.org/licenses/MIT)'
  } else if (key = 'Eclipse') {
      return 'This project (and all code) is licensed under the [Eclipse license](https://opensource.org/licenses/EPL-2.0)'
  }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (key == 'none') {
    return '';
  } else {
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(key == 'none'){
    return '';
  } else {
    return `## License`
    ;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  key = response.license;

  return `# ${response.title}

<!-- ![ALT](/path/​image.ext) -->
<!-- [LINK NAME](https://www.linkaddress) -->
${renderLicenseBadge()}

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
${renderLicenseInfo()}


## Contributing
${response.contributing}

## Contact
if you have any questions feel free to reach out by [email](mailto:${response.questions}) or visit my [Github](https://github.com/${response.githubUserName})
`;
}


module.exports = generateMarkdown;
