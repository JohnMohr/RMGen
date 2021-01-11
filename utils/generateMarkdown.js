// // Function returns a license badge based on which license is selected.
// function renderLicenseBadge(license) {
// license =  (`![License Badge]('https://img.shields.io/badge/License-${userResponses.projectLicense}-brightgreen.svg')`);
// console.log(license);
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// Function returns the license section of README
// function renderLicenseSection(license) {
// license = (`*[License](#userResponses.projectLicense)`);
// console.log(license);
// }

// Function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
    //Create ToC based on Questions' userResponses.
let draftToC = `
## Table of Conents`;

if (userResponses.projectInstall !== '') { draftToC += `
    *[Installation](#projectInstall)
    `};

if (userResponses.projectStory !== '') { draftToC += `
    *[Usage](#projectStory)
    `};
    
if (userResponses.projectContrib !== '') { draftToC += `
    *[Contributing](#projectContrib)
    `};
//beginning of readme. github and license badges. description response.
let draftMarkdown =  `
# ${userResponses.projectTitle}

![Github Repo Top Language](https://img.shields.io/github/languages/top/${userResponses.userName}/${userResponses.userRepo}?style=flat&logo=appveyor) 
![License Badge]('https://img.shields.io/badge/License-${userResponses.projectLicense}-brightgreen.svg')

***

## **Description**

*How, What, When, Where, and Why:*

${userResponses.projectStory}
`

//Add ToC to markdown document
draftMarkdown += draftToC;

//add license link
draftMarkdown += `
    *[License](#userResponses.projectLicense)
    `;
// renderLicenseSection();
// renderLicenseBadge();

//optional sections dependant on provided answer existing
if(userResponses.projectInstall !== '') {
    draftMarkdown += `
***
## **Installation**

*Required Steps of Installation:*
${userResponses.projectInstall}


`};
if(userResponses.projectInstall !== '') {
    draftMarkdown += `
## **Usage**
    
*Instructions and Usage:*
${userResponses.projectStory}


`};
if(userResponses.projectStory !== '') {
    draftMarkdown += `
## **Contributing**
    
*People, Places & Things:*
${userResponses.projectContrib}


`};
//License section
draftMarkdown += `
## **License**

${userResponses.projectLicense}
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
//KOBE(send it)
return draftMarkdown;
}

module.exports = generateMarkdown;