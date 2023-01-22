// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the project's title",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter the description of this project",
  },
  {
    type: "input",
    name: "installation instructions",
    message: "Please enter the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage of this project",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter the contributing members",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter the testing instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose the license of your project",
    choices: ["MIT", "MPL 2.0", "ISC"],
    },
    {
        type: 'input',
        name: 'git_username',
        message:'Please enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message:'Please enter your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
