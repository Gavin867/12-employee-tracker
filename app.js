const connection = require("./database/connection");
const inquirer = require("inquirer");
const database = require("./database");
const consoletable = require("console.table");
const asciiartLogo = require("asciiart-logo");

console.log(
  asciiartLogo({
    name: 'Employee Tracker',
    font: 'Big Money-ne',
    lineChars: 10,
    padding: 2,
    margin: 3,
    borderColor: 'green',
    logoColor: 'bold-pink',
    textColor: 'yellow',
  })
    .emptyLine()
    .right('version 1.0')
    .emptyLine()
    .center("Organizational Management Solution")
    .render()
);

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
      "UPDATE Manager",
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
        modifyEmployeeRole();

        break;

      case "UPDATE Manager":
        modifyEmployeeManager();

        break;

      case "DELETE Department":
        dropDepartment();

        break;

      case "DELETE Role":
        dropRole();

        break;

      case "DELETE Employee":
        dropEmployee();

        break;

      case "EXIT Application":
        connection.end();

        break;
    }
  })
};

function viewDepartments() {
  database.formatDepartmentTable().then(result => {
    console.table(result);
    init();
  });
};

function viewRoles() {
  database.formatRoleTable().then(result => {
    console.table(result);
    init();
  });
};

function viewEmployees() {
  database.formatEmployeeTable().then(result => {
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
    }).then(newDepartmentInfo => {
      database.createDepartment(newDepartmentInfo).then(result => {
        console.log("You have successfully added " + newDepartmentInfo.departmentName + " to Departmnets.");
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
        console.log("You have succesfully added " + newRoleInfo.roleTitle + " to Roles.");
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
        console.log("You have successfully added " + newEmployeeInfo.employeeFirstName + " " + newEmployeeInfo.employeeLastName + " to Employees.");
        init();
      });
    });
  });
};

function modifyEmployeeRole() {
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
        database.updateEmployeeRole(newRoleInfo).then((result) => {
          console.log("You have successfully upated Employee " + newRoleInfo.employeeId + "'s role.");
          init();
        });
      });
    });
  });
};

function modifyEmployeeManager() {
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

  database.readEmployees().then((employees) => {
    let employeeOptions = employees.map((getEmployees) => ({
      value: getEmployees.employee_id,
      name: `${getEmployees.employee_first_name} ${getEmployees.employee_last_name}`
    }));

    inquirer.prompt([
      {
        message: "Which employee would you like to update?",
        type: "list",
        name: "employeeId",
        choices: employeeOptions
      },
      {
        message: "Who is this employee's new manager?",
        type: "list",
        name: "managerId",
        choices: managerOptions
      }
    ]).then(newManagerInfo => {
      database.updateEmployeeManager(newManagerInfo).then((result) => {
        console.log("You have successfully upated Employee " + newManagerInfo.employeeId + "'s role.");
        init();
      });
    });
  });
};

function dropDepartment() {
  database.readDepartments().then(departments => {
    let departmentOptions = departments.map(departments => ({
      value: departments.department_id,
      name: departments.department_name
    }));

    inquirer.prompt(
      {
        type: "list",
        name: "departmentId",
        message: "Which department would you like to delete?",
        choices: departmentOptions
      }).then(removeDepartment => {
        database.deleteDepartment(removeDepartment).then(result => {
          console.log("You have successfully deleted Department " + removeDepartment.departmentId + " from Departments.");
          init();
        });
      });
  });
};

function dropRole() {
  database.readRoles().then(roles => {
    let roleOptions = roles.map(roles => ({
      value: roles.role_id,
      name: roles.role_title
    }));

    inquirer.prompt(
      {
        type: "list",
        name: "roleId",
        message: "Which role would you like to delete?",
        choices: roleOptions
      }).then(removeRole => {
        database.deleteRole(removeRole).then(result => {
          console.log("You have successfully deleted Role " + removeRole.roleId + " from Roles.");
          init(); 
        });
      });
  });
};

function dropEmployee() {
  database.readEmployees().then((employees) => {
    let employeeOptions = employees.map((getEmployees) => ({
      value: getEmployees.employee_id,
      name: `${getEmployees.employee_first_name} ${getEmployees.employee_last_name}`
    }));

    inquirer.prompt(
      {
        message: "Which employee would you like to delete?",
        type: "list",
        name: "employeeId",
        choices: employeeOptions
      }).then(removeEmployee => {
        database.deleteEmployee(removeEmployee).then(result => {
          console.log("You have successfully deleted Employee " + removeEmployee.employeeId + " from Employees.");
          init();
        });
      });
  });
};

init();
