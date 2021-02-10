const connection = require("./connection");

module.exports = {
    viewDepartments() {
        return this.connection.query("SELECT * from departments");
    },

    viewRoles() {
        return this.connection.query("SELECT * from roles"); 
    },

    viewEmployees() {
        return this.connection.query("SELECT * from employees"); 
    },

    addDepartment(deptartmentName) {
        return this.connection.query("INSERT INTO departments SET ?", departmentName);
    },

    addRole() {
        return this.connection.query("INSERT INTO roles SET ?", title);
    },

    addEmployee() {
        return this.connection.query("INSERT INTO departments SET ?", first_name, last_name);
    }
};