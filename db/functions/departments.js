const connection = require("./connection");

const app = require("../../app");

class Department {

    constructor(connection) {
        this.connection = connection;
    };

    // View all deparments
    viewAllDepartments() {

        return this.connection.query("SELECT * from department");
    }

    // Add department
    addDepartment(deptName) {
        
        return this.connection.query("INSERT INTO department SET ?", deptName);
    }

    // Delete Departments

};

module.exports = new Department(connection); 