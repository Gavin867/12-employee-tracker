const connection = require("./connection");

module.exports = {
    viewDepartments() {
        return connection.query("SELECT * from departments");
    },

    viewRoles() {
        return connection.query("SELECT * from roles"); 
    },

    viewEmployees() {
        return connection.query("SELECT * from employees"); 
    },

    addDepartment(department_name) {
        return connection.query("INSERT INTO departments SET ?", department_name);
    },

    addRole(newRoleInfo) {
        return connection.query("INSERT INTO roles SET ?", {
            role_title: newRoleInfo.department_id,
            role_salary: newRoleInfo.role_salary,
            department_id: newRoleInfo.department_id
        });
    },

    // addEmployee() {
    //     return connection.query("INSERT INTO departments SET ?", first_name, last_name);
    // },

    // updateRole() {

    // },

    // deleteDepartment() {

    // },

    // deleteRole() {

    // },

    // deleteEmployee() {

    // }
};