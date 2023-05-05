import inquirer from "inquirer";
import writeFile from "fs";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import render from "./src/template.js";

let team = [];
userStart();
//at start we want a promt for managers info
function userStart() {
   inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your managers name?",
      },
      {
        type: "input",
        name: "employee_id",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "office_number",
        message: "What is your office number?",
      },
    ])
    .then((input) => {
      const manager = new Manager(
        input.name,
        input.employee_id,
        input.email,
        input.office_number
      );
      team.push(manager);
      menuOptions();
    });
}
//for engineer it needs to ask for name id email and github, then bck  to menu
function engineerInput() {
   prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineers name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineers employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineers email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineers GitHub username?",
    },
  ])
  .then((input) => {
    const engineer = new Engineer(
      input.name,
      input.employee_id,
      input.email,
      input.github
    );
    team.push(engineer);
    menuOptions();
  });
}
//for intern it needs to ask name id email and school then bck to menu
function internInput() {
   prompt([
    {
      type: "input",
      name: "name",
      message: "What is the interns name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the interns employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the interns email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What school does/did the intern attend?",
    },
  ])
  .then((input) => {
    const intern = new Intern(
      input.name,
      input.employee_id,
      input.email,
      input.school
    );
    team.push(intern);
    menuOptions();
  });
}
//then we have a menu option to add engineer intern or finish
function menuOptions() {
  prompt([
    {
      type: "list",
      name: "menu",
      message: "What team member would you like to add next?",
      choices: ["Engineer", "Intern", "Finish building my team"],
    },
  ])
  .then(menuList => {
    switch (menuList.menu) {
      case "Engineer":
        engineerInput();
        break;

      case "Intern":
       internInput();
        break;

       default:
        writeFile('team.html', render(team), function(err, result) {
          if(err) console.log('error', err);
        }
     );
    }
  })
}

//when i decide to finish i exit application then html is made
//user input needs to be compliled into html
//write the string to an html file
