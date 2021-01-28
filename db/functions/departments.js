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
    
    // Delete Departments

};

module.exports = new Department(connection); 