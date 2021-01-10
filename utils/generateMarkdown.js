// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
    //Create ToC based on Questions' userResponses.
let draftToC = `## Table of Conents`;
if (userResponses.projectInstall !== '') {
    draftToc += `
    * [Installation](#projectInstall)`
};
if (userResponses.projectStory !== '') {
    draftToc += `
    *[Usage](#projectStory)`
};
if (userResponses.projectContrib !== '') {
    draftToc += `
    *[Contributing](#contributing)`
};
 let draftMarkdown =  
 `# ${userResponses.projectTitle}

![Github Repo Top Language](https://img.shields.io/github/languages/top/${userResponses.userName}/${userResponses.userRepo}?style=flat&logo=appveyor) ![License Badge]('')

## Description

*This is the how, what, when, where, why.*


`;
}

module.exports = generateMarkdown;