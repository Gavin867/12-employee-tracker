const connection = require("./db/functions/connection");

const departments = require("./db/functions/departments");

// Roles, Employees

const inquirer = require("inquirer");
const employees = require("./db/functions/employees");
const { removeListener } = require("./db/functions/connection");

function init() {

  console.log("Welcome to employee tracker!");

  inquirer

    .prompt({

      type: "list",

      name: "action",

      message: "What would you like to do?",

      choices: [

        // SELECT Statements
        "VIEW Departments",

        "VIEW Roles",

        "VIEW Employees",

        // ADD Statements
        "ADD Department",

        "ADD a role",

        "ADD an employee",

        // UPDATE
        "UPDATE an employee role",

        // DELETE
        "DELETE a Department",

        "DELETE a Role",

        "DELETE an Employee",

        // QUIT
        "EXIT the Application"
      ]
    }).then(userResponse => {

      console.log(userResponse);

      switch (userResponse.action) {

        case "VIEW Departments":

        // Pass in a function to .then, =>
          departments.viewAllDepartments().then(result => {
            
            console.table(result);

            init(); 
          });

          break;

        case "VIEW Roles":

          roles.viewAllRoles();

          break;

        case "VIEW Employees":

          employees.viewAllEmployees();

          break;

        case "ADD Department":
          // code block

          break;

        case "ADD a role":
          // code block

          break;

        case "ADD an Employee":
          // code block

          break;

        case "UPDATE an Employee Role":
          // code block

          break;

        case "DELETE a Department":
          // code block

          break;

        case "DELETE a Role":
          // code block

          break;

        case "DELETE an Employee":
          // code block

          break;

        case "EXIT the Application":
          // code block

          break;

        // All cases covered default is not needed
        // default:
        // code block
      }
      // init();
    })
};

init();
