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

    createDepartment(newDepartment) {
        return connection.query("INSERT INTO departments SET ?",
            {
                department_name: newDepartment.departmentName
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
        return connection.query("INSERT INTO departments SET ?",
            {
                employee_first_name: newEmployeeInfo.employeeFirstName,
                employee_last_name: newEmployeeInfo.employeeLastName,
                role_id: newEmployeeInfo.roleId,
                managers_id: newEmployeeInfo.managerId
            }
        );
    },

    // updateRole() {

    // },

    // deleteDepartment() {

    // },

    // deleteRole() {

    // },

    // deleteEmployee() {

    // }
};