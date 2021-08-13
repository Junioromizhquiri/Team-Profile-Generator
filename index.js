const inquirer = require('inquirer');

const Employee = require ('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const path = require('path');

const output_dir = path.resolve(__dirname, 'dist');
const output_file = path.join(output_dir, 'team.html');

const render = require('./src/HTML_template');

teamArray = [];

function startMenu() {
  inquirer.prompt(
    [
      {
        type: 'list',
        name: 'roleChoice',
        message: 'Which type of team member would you like to add?',
        choices: ['Employee','Engineer', 'Intern', 'Manager', 'Finish']
      }
    ]
  )
    .then(
      data => {
        switch (data.roleChoice) {
          case 'Employee':
            addEmployee();
            break;
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          case 'Manager':
            addManager();
            break;
          default:
            writeToFile();
        }
      }
    )
}

function addEmployee() {
  inquirer.prompt(questions.employeeQuestions)
    .then(
      data => {
        const employee = new Employee(data.id, data.name, data.email, data.officeNumber);
        teamArray.push(employee);
        startMenu();
      })
}

function addManager() {
  inquirer.prompt(questions.managerQuestions)
    .then(
      data => {
        const manager = new Manager(data.id, data.name, data.email, data.officeNumber);
        teamArray.push(manager);
        startMenu();
      })
}

function addIntern() {
  inquirer.prompt(questions.internQuestions)
    .then(
      data => {
        const intern = new Intern(data.id, data.name, data.email, data.school);
        teamArray.push(intern);
        startMenu();
      })
}

function addEngineer() {
  inquirer.prompt(questions.engineerQuestions)
    .then(
      data => {
        const engineer = new Engineer(data.id, data.name, data.email, data.github);
        teamArray.push(engineer);
        startMenu();
      })
}

function writeToFile() {
  if (!fs.existsSync(output_dir)) {
    fs.mkdirSync(output_dir)
  }
  fs.writeFileSync(output_file, render(teamArray), "utf-8");
};

function writeToFile() {
  if (!fs.existsSync(output_dir)) {
    fs.mkdirSync(output_dir)
  }
  fs.writeFileSync(output_file, render(teamArray), "utf-8");
};

startMenu()

const questions = {
  employeeQuestions:
    [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
      }
    ],
  managerQuestions:
    [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your role?',
      }
    ],
  internQuestions: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your school?',
    }],
    engineerQuestions: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github?',
      }
  ]
}