// Packages needed
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const util = require(`util`);

// Internal modules 
const generateMarkdown = require('./utils/generateMarkdown.js');
const grabInfo = require('./utils/grabInfo.js');

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

const writeAsync = util.promisify(writeToFile)
// asynch function to initialize app
async function init() {
    try {
        //prompt the questions
    const userResponses = await inquirer.prompt(questions);
    console.log("Your Responses:", userResponses)
    console.log("Responses established. Goin' through your GitHub.");
        //calling github
    const userInfo = await grabInfo.getUser(userResponses);
    console.log("Your GitHub user info:", userInfo);
}
}

// Function call to initialize app
init();