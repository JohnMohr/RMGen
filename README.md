# RMGen 
## ReadMe.md Generator

![Github Repo Top Language](https://img.shields.io/github/languages/top/JohnMohr/RMGen?style=flat&logo=appveyor) 
![License Badge]('https://img.shields.io/badge/License-GNU_AGPLv3-brightgreen.svg')

### **Description**
*How, What, When, Where, and Why:*

We all need to make easy-to-understand ReadMe.md files, and better yet they follow a standard formula. This application creates a draft ReadMe.md file using Node.js.
[ReadMe created using RMGen application.](exampleReadMe.md)

## Table of Conents

    *[Installation](#projectInstall)
    *[Usage](#projectStory)
    *[Contributing](#projectContrib)
    *[License](#userResponses.projectLicense)

### **Installation**

*Required Steps of Installation:*

To begin first run `npm install` for `inquirer` and `axios` modules.
Once installed run application with `node index.js`


### **Usage**
    
*Instructions and Usage:*

Run command `node index.js` and you will be prompted by the Inquirer package with the Questions const created in the index.js file.

RMGen takes the userResponses and creates a markdown file with a Table of Contents conditinal to the data in userResponses. If the answers are blank the ToC will not create(or link to) that section within the document.
Badges are generated for your Github and License.

As an added nifty feature the About Section is linked using the Axios module and shows us the github link and profile photo of the author.

### **Contributing**
    
*People, Places & Things:*




### **License**

GNU_AGPLv3




***
***

##Questions?

![Dev Profile](https://avatars2.githubusercontent.com/u/74803311?v=4)

Questions? Concerns? Good joke? Get at me:

GitHub: [@JohnMohr](https://api.github.com/users/JohnMohr)