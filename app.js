const connection = require("./database/connection");
const inquirer = require("inquirer");
const database = require("./database/index");

function addNewDepartment() {
  inquirer
    .prompt(
      {
        type: "input",
        name: "department_name",
        message: "What is the name of your new department?",
      }).then(newDepartmentName => {
        database.addDepartment(newDepartmentName).then(result => {
          init();
        });
      });
};

function addNewRole() {
  inquirer
    .prompt(
      {
        type: "input",
        name: "role_title",
        message: "What is the title of this new role?"
      },
      {
        type: "input",
        name: "role_salary",
        message: "In dollars, what is the compensation associated with this role?"
      },
      {
        type: "list",
        name: "department_id",
        message: "To which department does this role belong?",
        choices: database.map((department) => ({
            value: database.department_id,
            name: database.name
        })) 
      },
    ).then(newRoleInfo => {
      database.addRole(newRoleInfo).then(result => {
        console.table(result);
        
        init();
      });
    });
};

function init() {
  console.log("Welcome to the Employee Tracker!");

  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "Select an action.",
      choices: [
        "VIEW Departments",
        "VIEW Roles",
        "VIEW Employees",
        "ADD Department",
        "ADD Role",
        "ADD Employee",
        "UPDATE Role",
        "DELETE Department",
        "DELETE Role",
        "DELETE Employee",
        "EXIT Application"
      ]
    }).then(userResponse => {

      switch (userResponse.action) {
        case "VIEW Departments":
          database.viewAllDepartments().then(result => {
            console.table(result);
            init();
          });

          break;

        case "VIEW Roles":
          database.viewAllRoles().then(result => {
            console.table(result);
            init();
          });

          break;

        case "VIEW Employees":
          database.viewAllEmployees().then(result => {
            console.table(result);
            init();
          });

          break;

        case "ADD Department":
          addNewDepartment();

          break;

        case "ADD a role":
          addNewRole();

          break;

        case "ADD an Employee":

          break;

        case "UPDATE an Employee Role":

          break;

        case "DELETE a Department":

          break;

        case "DELETE a Role":

          break;

        case "DELETE an Employee":

          break;

        case "EXIT the Application":

          break;
      }
    })
};

init();
