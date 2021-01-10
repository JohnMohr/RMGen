// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

//  Array of questions for user input
const questions = [{
    type:'input' ,
    message: 'What is your GitHub user name?',
    name: 'userName',
},
    {
    type: 'input',
    message:'What is the name of your GitHub Repo?' ,
    name: 'userRepo',
},
    {
    type: 'input',
    message:'What is your project title?' , 
    name: 'projectTitle',
},
    {
    type: 'input',
    message: 'Describe your project:',
    name: 'projectStory',
},
    {
    type: 'input',
    message: 'Describe how to install your project.',
    name: 'projectInstall',
},
    {
    type: 'input',
    message: 'Do you have examples or instructions for project usage?',
    name: 'projectUsage',
},
    {
    type: 'input',
    message: 'Who/What contributed to your project?',
    name: 'projectContrib',
},
    {
    type: 'list',
    message: 'Choose a license for your project.',
    name: 'projectLicense',
    choices: ['']
},
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your ReadMe.md has been generated!")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();