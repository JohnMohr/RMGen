// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
    //Create ToC based on Questions' userResponses.
// let draftToC = `## Table of Conents`;

// if (userResponses.projectInstall !== '') { draftToc += `
//     * [Installation](#projectInstall)`};

// if (userResponses.projectStory !== '') { draftToc += `
//     *[Usage](#projectStory)`};
    
// if (userResponses.projectContrib !== '') { draftToc += `
//     *[Contributing](#contributing)`};

let draftMarkdown =  `
# ${userResponses.projectTitle}

![Github Repo Top Language](https://img.shields.io/github/languages/top/${userResponses.userName}/${userResponses.userRepo}?style=flat&logo=appveyor) ![License Badge]('https://img.shields.io/badge/License-${userResponses.license}-brightgreen.svg')

## Description

*This is the how, what, when, where, and why.*

${userResponses.projectStory}`

//Add ToC to markdown document
// draftMarkdown += draftToc;

//add license
draftMarkdown += `* [License](#userResponses.projectLicense)`;

//optional sections dependant on provided answer existing
if(userResponses.projectInstall !== '') {
    draftMarkdown += `
## Installation

*Required Steps of Installation:*
${userResponses.projectInstall}
`};
if(userResponses.projectInstall !== '') {
    draftMarkdown += `
## Usage
    
*Instructions and Usage:*
${userResponses.projectStory}
`};
if(userResponses.projectStory !== '') {
    draftMarkdown += `
## Contributing
    
*People, Places & Things :*
    ${userResponses.projectContrib}
`};
//License section
draftMarkdown += `

## License

${userResponses.license}
`;

// About Section
let draftAbout =`
***
***

##Questions?

![Dev Profile](${userInfo.avatar_url})

Questions? Concerns? Good joke? Get at me:

GitHub: [@${userInfo.login}](${userInfo.url})

`
//add About section
draftMarkdown += draftAbout;
//KOBE
return draftMarkdown;
}

module.exports = generateMarkdown;