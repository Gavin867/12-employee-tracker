const mysql = require("mysql");

const util = require("util");

const inquirer = require("inquirer");

require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: process.env.DB_USER,

  // Your password
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  init();
});

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
          // code block

          break;

        case "VIEW Roles":
          // code block
          break;

        case "VIEW Employees":
          // code block

          break;

        case "ADD Department":
          // code block

          break;

        case "ADD a role":
          // code block

          break;

        case "ADD an employee":
          // code block

          break;

        case "UPDATE an employee role":
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

    })


}