const connection = require("./database/connection");
const inquirer = require("inquirer");
const database = require("./database");
const consoletable = require("console.table");

function init() {
  console.log("Welcome to the Employee Tracker!");
  inquirer.prompt({
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
        addEmployee();

        break;

      case "UPDATE Role":
        updateEmployeeRole();

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
  inquirer.prompt(
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

    inquirer.prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "What is the title of this new role?"
      },
      {
        type: "input",
        name: "roleSalary",
        message: "In dollars, what is the yearly compensation associated with this role?"
      },
      {
        type: "list",
        name: "departmentId",
        message: "To which department does this role belong?",
        choices: departmentOptions
      },
    ]).then(newRoleInfo => {
      database.createRole(newRoleInfo).then(result => {
        console.log("You have succesfully added" + newRoleInfo.roleTitle);
        init();
      });
    });
  });
};

function addEmployee() {
  let managerOptions;

  database.readEmployees().then(employees => {
    managerOptions = employees.map(getManagers => ({
      value: getManagers.employee_id,
      name: `${getManagers.employee_first_name} ${getManagers.employee_last_name}`
    }));

    managerOptions.push({
      name: "none",
      value: null
    })
  });

  database.readRoles().then(roles => {
    let roleOptions = roles.map(getRoles => ({
      value: getRoles.role_id,
      name: getRoles.role_title
    }));

    inquirer.prompt([
      {
        type: "input",
        name: "employeeFirstName",
        message: "What is this employee's first name?"
      },
      {
        type: "input",
        name: "employeeLastName",
        message: "What is this employee's last name?"
      },
      {
        type: "list",
        name: "roleId",
        message: "What is the role of this employee?",
        choices: roleOptions
      },
      {
        type: "list",
        name: "managerId",
        message: "Who is this employee's manager?",
        choices: managerOptions
      },
    ]).then(newEmployeeInfo => {
      database.createEmployee(newEmployeeInfo).then(result => {
        console.log(newEmployeeInfo.employeeFirstName);
        init();
      });
    });
  });
};

function updateEmployeeRole() {
  database.readEmployees().then((employees) => {
    let employeeOptions = employees.map((getEmployees) => ({
      value: getEmployees.employee_id,
      name: `${getEmployees.employee_first_name} ${getEmployees.employee_last_name}`
    }));

    database.readRoles().then((roles) => {
      let roleOptions = roles.map((getRoles) => ({
        value: getRoles.role_id,
        name: getRoles.role_title
      }));

      inquirer.prompt([
        {
          message: "Which employee would you like to update?",
          type: "list",
          name: "employeeId",
          choices: employeeOptions
        },
        {
          message: "What is this employee's new role?",
          type: "list",
          name: "roleId",
          choices: roleOptions
        }
      ]).then(newRoleInfo => {
        database.updateEmployee(newRoleInfo).then((result) => {
          console.log("This employee's role has been updated.");
          init();
        });
      });
    });
  });
};

init();
