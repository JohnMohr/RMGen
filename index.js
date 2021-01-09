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