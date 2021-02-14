const { restoreDefaultPrompts } = require("inquirer");
const connection = require("./connection");

module.exports = {
    readDepartments() {
        return connection.query("SELECT * from departments");
    },

    readRoles() {
        return connection.query("SELECT * from roles");
    },

    readEmployees() {
        return connection.query("SELECT * from employees");
    },

    createDepartment(newDepartmentInfo) {
        return connection.query("INSERT INTO departments SET ?",
            {
                department_name: newDepartmentInfo.departmentName
            }
        );
    },

    createRole(newRoleInfo) {
        return connection.query("INSERT INTO roles SET ?",
            {
                role_title: newRoleInfo.roleTitle,
                role_salary: newRoleInfo.roleSalary,
                department_id: newRoleInfo.departmentId
            }
        );
    },

    createEmployee(newEmployeeInfo) {
        return connection.query("INSERT INTO employees SET ?",
            {
                employee_first_name: newEmployeeInfo.employeeFirstName,
                employee_last_name: newEmployeeInfo.employeeLastName,
                role_id: newEmployeeInfo.roleId,
                managers_id: newEmployeeInfo.managerId
            }
        );
    },

    updateEmployeeRole(newRoleInfo) {
        return connection.query("UPDATE employees SET ? WHERE ?", [
            {
                role_id: newRoleInfo.roleId
            },
            {
                employee_id: newRoleInfo.employeeId
            }
        ])
    },

    updateEmployeeManager(newManagerInfo) {
        return connection.query("UPDATE employees SET ? WHERE ?", [
            {
                managers_id: newManagerInfo.managerId
            },
            {
                employee_id: newManagerInfo.employeeId
            }
        ])
    },

    deleteDepartment(removeDepartment) {
        return connection.query("DELETE FROM departments WHERE ?",
            {
                department_id: removeDepartment.departmentId
            }
        )
    },

    deleteRole(removeRole) {
        return connection.query("DELETE FROM roles WHERE ?",
            {
                role_id: removeRole.roleId
            }
        )
    },

    deleteEmployee(removeEmployee) {
        return connection.query("DELETE FROM employees WHERE ?",
            {
                employee_id: removeEmployee.employeeId
            }
        )
    },

    formatDepartmentTable() {
        return connection.query
            (`SELECT
            department_id as 'ID#',
            department_name as Deparments
          FROM
            departments;`)
    },

    formatRoleTable() {
        return connection.query
            (`SELECT
            role_id as 'ID#',
            role_title as Title,
            role_salary as Salary,
            department_name as Deparment
          FROM
            roles
            LEFT JOIN departments ON departments.department_id = roles.department_id;`)
    },

    formatEmployeeTable() {
        return connection.query
            (`SELECT
            employees.employee_id as 'ID#', 
            employees.employee_first_name as 'First Name', 
            employees.employee_last_name as 'Last Name', 
            role_title as Title, role_salary as Salary,
            department_name as Deparment, 
            CONCAT (managers.employee_first_name, ' ', managers.employee_last_name) as Manager
            FROM employees
                LEFT JOIN roles ON roles.role_id = employees.role_id
                LEFT JOIN departments ON departments.department_id = roles.department_id
                LEFT JOIN employees as managers ON managers.employee_id = employees.managers_id;`)
    }
};