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
    default: 'JohnMohr',
},
    {
    type: 'input',
    message:'What is the name of your GitHub Repo?' ,
    name: 'userRepo',
    default: 'RMGen',
},
    {
    type: 'input',
    message:'What is your project title?' , 
    name: 'projectTitle',
    default: 'Default Title',
},
    {
    type: 'input',
    message: 'Describe your project:',
    name: 'projectStory',
    default: "Default Description",
},
    {
    type: 'input',
    message: 'Describe how to install your project.',
    name: 'projectInstall',
},
    {
    type: 'input',
    message: 'How do you use the project?',
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
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
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

        //push response data to generateMarkdown
    console.log("Generating Markdown...")
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);
        //write markdown to file.
    await writeAsync('exampleReadMe.md', markdown)

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();