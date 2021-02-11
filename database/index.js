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

    addDepartment(deptartment_name) {
        return connection.query("INSERT INTO departments SET ?", department_name);
    },

    addRole() {
        return connection.query("INSERT INTO roles SET ?", role_title);
    },

    addEmployee() {
        return connection.query("INSERT INTO departments SET ?", first_name, last_name);
    }
};