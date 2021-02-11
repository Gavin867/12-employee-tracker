const connection = require("./database/connection");
const inquirer = require("inquirer");
const database = require("./database");
const consoletable = require("console.table");
const { addEmployee } = require("./database");

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
  database.readDepartments().then(result => {
    console.table(result);
    init();
  });
};

function viewRoles() {
  database.readRoles().then(result => {
    console.table(result);
    init();
  });
};

function viewEmployees() {
  database.readEmployees().then(result => {
    console.table(result);
    init();
  });
};

function addDepartment() {
  inquirer
    .prompt(
      {
        type: "input",
        name: "departmentName",
        message: "What is the name of your new department?",
      }).then(newDepartment => {
        database.createDepartment(newDepartment).then(result => {
          console.log("Your new department has been added.");
          init();
        });
      });
};

function addRole() {
  database.readDepartments().then(departments => {

    let departmentOptions = departments.map(departments => ({
      value: departments.department_id,
      name: departments.department_name
    }));

    inquirer
      .prompt([
        {
          type: "input",
          name: "roleTitle",
          message: "What is the title of this new role?"
        },
        {
          type: "input",
          name: "roleSalary",
          message: "In dollars, what is the compensation associated with this role?"
        },
        {
          type: "list",
          name: "departmentId",
          message: "To which department does this role belong?",
          choices: departmentOptions
        },
      ]).then(newRoleInfo => {
        database.createRole(newRoleInfo).then(result => {
          console.table(result);
          init();
        });
      });
    });    
};

// addEmployee() 

  init();
