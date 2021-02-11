const connection = require("./database/connection");
const inquirer = require("inquirer");
const database = require("./database");
const consoletable = require("console.table");

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
          viewDepartments();

          break;

        case "VIEW Roles":
          viewRoles();

          break;

        case "VIEW Employees":
          viewEmployees();

          break;

        case "ADD Department":
          addDepartment();

          break;

        case "ADD Role":
          addRole();

          break;

        case "ADD Employee":

          break;

        case "UPDATE Role":

          break;

        case "DELETE Department":

          break;

        case "DELETE Role":

          break;

        case "DELETE Employee":

          break;

        case "EXIT Application":
          connection.end();

          break;
      }
    })
};

function viewDepartments() {
  database.viewDepartments().then(result => {
    console.table(result);
    init();
  });
};

function viewRoles() {
  database.viewRoles().then(result => {
    console.table(result);
    init();
  });
};

function viewEmployees() {
  database.viewEmployees().then(result => {
    console.table(result);
    init();
  });
};

function addDepartment() {
  inquirer
    .prompt(
      {
        type: "input",
        name: "department_name",
        message: "What is the name of your new department?",
      }).then(newDepartmentName => {
        database.addDepartment(newDepartmentName).then(result => {
          console.log("Your new department has been added.");
          init();
        });
      });
};

function addRole() {
  database.viewDepartments().then(result => {

    let departmentOptions = departments.map((departments) => ({
      value: departments.department_id,
      name: departments.department_name
    }));

    inquirer
      .prompt([
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
          choices: departmentOptions
        },
      ]).then(newRoleInfo => {
        database.addRole(newRoleInfo).then(result => {
          console.table(result);
          init();
        });
      });
    });    
};

  init();
