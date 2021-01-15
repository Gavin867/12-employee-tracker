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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  init();
});

function init() {

    console.log("Welcome to employee tracker!");

    inquirer
      .prompt({
        name: "list",
        name: "action",
        type: "What would you like to do?"
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add a role",
          "Add an employee",

        ]
      })


}