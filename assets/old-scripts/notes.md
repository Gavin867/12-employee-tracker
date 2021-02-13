const departments = require("./database/functions/departments");
const roles = require("./database/functions/roles");
const employees = require("./database/functions/employees");
const inquirer = require("inquirer");
const { connection } = require("./database/functions/departments");

function viewEmployees() {
  database.readEmployees().then(result => {
    console.table(result);
    init();
  });
};