const connection = require("./connection");

const app = require("../../app");

class Department {

    constructor(connection) {
        this.connection = connection;
    };

    // View all deparments
    viewAllDepartments() {

        console.log("Viewing All Departments...");

        return this.connection.query("SELECT * from department");
    }

    // Add department
    addDepartment(deptName) {
        
        console.log("Adding", deptName, "to departments...");
        
        return this.connection.query("INSERT INTO department SET ?", deptName);
    }

    // Delete Departments

};

module.exports = new Department(connection); 