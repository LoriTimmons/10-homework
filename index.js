// how do I write to an HTML page 🚫
const inquirer = require('inquirer');
const generateHtmlPage = require('./generateHtmlPage')🚫

// file system 
const fs = require('fs');
// h=what is this?
const Choices = require('inquirer/lib/objects/choices');

// array of questions
const questions = [{
    type: "input",
    name: "Manager_Name",
    message: "What is the Team Manager's name?"
},
{
    type: "input",
    name: "Manager ID",
    message: "Manager's employee ID?"
},
{
    type: "input",
    name: "Manager EM",
    message: "Team Manager's Email Address?"
},

{
    type: "input",
    name: "Office Number",
    message: "Team Manager's Office Number?"
},
// End of Manager info 
{
    type: "list",
    name: "add employee",
    message: "Select employee type",

    choices: [
    "Engineer", "Intern",
    ]
},


];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        console.log("This is data", data);
    let answers = generateHtmlPage(data);
    console.log(answers);
    writeToFile(answers);
    })
}

// Function call to initialize app
init();