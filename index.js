// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project."
    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions for using your project. If you want to include screenshots by creating an assets/images folder in your repository: ![alt text](assets/images/screenshot.png)"
    },

    {
        type: "input",
        name: "contribution",
        message: "Provide guidelines for contributing to your project."
    },

    {
        type: "input",
        name: "test",
        message: "Provide instructions for testing your project."
    },

    {
        type: "list",
        name: "license",
        message: "Select a license for your project.",
        choices: ["ASU", "Cochise College", "UofA", "GitHub", "None"]
    },

    {
        type: "input",
        name: "githubUsername",
        message: "Enter your GitHub username."
    },

    {
        type: "input",
        name: "githubProfile",
        message: "Enter the link to your GitHub profile."
    },

    {
        type: "input",
        name: "githubDeployed",
        message: "Enter the link to your deployed GitHub project."
    },

];


// Function call to initialize app

async function init() {

    console.log("Welcome to the README.md generator. Please answer the following questions to generate your README.md file.");

    // Prompt user for answers to following questions

    const answers = await inquirer.prompt(questions);
    let readmeInfo = generateMarkdown(answers);

    // Creating the README.md file

    fs.writeFile("(Template)README.md", readmeInfo, err => {
        if (err) {
            console.log(err);
        }

        console.log("Success! Your README.md file has been generated. Please review the file and make any necessary changes.");
    });
}

// Function to write README file
init();


