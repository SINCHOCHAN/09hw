const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([{
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "project"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is your portfolio URL?",
        name: "portfolio"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT","BSD", "Apache", "Eclipse","NONE"],
        name: "licensetype"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "about"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Tests?",
        name: "tests"
    },

]).then(function(answers) {
    console.log('this is answer to our questions', answers);

    var readMeFile = `
    This is our awesome readme for our project

        Username : ${answers.username}
        email: ${answers.email}
        project: ${answers.project}
        description: ${answers.description}
        portfolio: ${answers.portfolio}
        licensetype: ${answers.licensetype}
        about: ${answers.about}
        contributing: ${answers.contributing}
        installation: ${answers.installation}
        tests: ${answers.tests} 
    `;

    //fs.writeFile('./', 'test.md', readMeFile)

    fs.writeFile('./output/test.md', readMeFile, function(err) {
        if (err) throw err;
        console.log('Replaced!');
    });

})