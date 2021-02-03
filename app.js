const departments = require("./db/functions/departments");
const roles = require("./db/functions/roles");
const employees = require("./db/functions/employees");
const inquirer = require("inquirer");

// Add function
function addThisDepartment() {

  inquirer
    
    .prompt ({

      type: "input",

      name: "department_name",

      message: "What is the name of your new department?",

    }).then(newDepartmentName => {

      console.log(newDepartmentName);

      departments.addDepartment(newDepartmentName).then(result => {

        console.table(result);

        init();
      
      });
    });
};

function addThisRole() {

  inquirer
    
  .prompt ({

    type: "input",

    name: "title",

    message: "What role would you like to add?",

  }).then(newTitleName => {

    console.log(newTitleName);

    roles.addThisRole(newTitleName).then(result => {

      console.table(result);

      init();
    
    });

  });

}

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

          departments.viewAllDepartments().then(result => {

            console.table(result);

            init();
          });

          break;

        case "VIEW Roles":

          roles.viewAllRoles().then(result => {

            console.table(result);

            init();
          });

          break;

        case "VIEW Employees":

          employees.viewAllEmployees().then(result => {

            console.table(result);

            init();
          });

          break;

        case "ADD Department":
          
          addThisDepartment();

          break;

        case "ADD a role":
          // code block

          addThisRole();

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
