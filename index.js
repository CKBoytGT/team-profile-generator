const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const buildHTML = require('./src/html');

let employeeArray = [];

// input validation: no response message
function emptyResponse() {
    console.log('\nPlease enter a response to continue.');
    return false;
};

// input validation: check that response uses only numerical characters
function validateNum(value) {
    if (/^\d+$/.test(value) === true) {
        return true;
    } else {
        console.log('\nPlease enter a valid number to continue.');
        return false;
    };
};

// input validation: check that response looks like an email address
function validateEmail(value) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === true) {
        return true;
    } else {
        console.log('\nPlease enter a valid email address to continue.');
        return false;
    };
};

// add a manager
function addManager() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate(value) { return value ? true : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID number?",
            validate(value) { return value ? validateNum(value) : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate(value) { return value ? validateEmail(value) : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the team manager's office number?",
            validate(value) { return value ? validateNum(value) : emptyResponse(); }
        }
    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNum);
        employeeArray.push(manager);
        employeeType();
    });
};

// select employee type
function employeeType() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Which type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'Done adding employees']
        }
    ])
    .then((data) => {
        switch(data.type) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'Done adding employees':
                writeToFile();
                break;
            default:
                console.log('Please select a valid choice.');
        };
    });
};

// add engineer
function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate(value) { return value ? true : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID number?",
            validate(value) { return value ? validateNum(value) : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate(value) { return value ? validateEmail(value) : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate(value) { return value ? true : emptyResponse(); }
        }
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employeeArray.push(engineer);
        employeeType();
    });
};

// add intern
function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate(value) { return value ? true : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID number?",
            validate(value) { return value ? validateNum(value) : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate(value) { return value ? validateEmail(value) : emptyResponse(); }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate(value) { return value ? true : emptyResponse(); }
        }
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employeeArray.push(intern);
        employeeType();
    });
};

// write to file
function writeToFile() {
    fs.writeFile('./dist/profile.html', buildHTML(employeeArray), (err) =>
        err ? console.log(err) : console.log('profile.html successfully created in the "dist" directory.')
    );
};

// start
function init() {
    console.log('Welcome to the team profile generator!');
    addManager();
}

init();