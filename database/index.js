const connection = require("./connection");

module.exports = {
    viewDepartments() {
        return this.connection.query("SELECT * from departments");
    },

    viewRoles() {
        return this.connection.query("SELECT * from roles"); 
    },

    viewEmployees() {
        return this.connection.query("SELECT * from employee"); 
    },

    addDepartment(deptName) {
        return this.connection.query("INSERT INTO department SET ?", deptName);
    },

    addRole() {
        return this.connection.query("INSERT INTO role SET ?", title);
    },

    addEmployee() {
        return this.connection.query("INSERT INTO department SET ?", first_name, last_name);
    }
};