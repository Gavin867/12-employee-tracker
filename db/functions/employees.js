const connection = require("./connection");

class Employee {

    constructor(connection) {
        this.connection = connection;
    };

    // View all Employees

    viewAllEmployees() {

        console.log("Viewing All Employees...");

        return this.connection.query("SELECT * from employee"); 
    }

    // Add Employee
    addEmployee() {

        console.log("Viewing All Employees...");

        return this.connection.query("INSERT INTO department SET ?", first_name, last_name);
    }

    // Delete Employee
    
};

module.exports = new Employee(connection); 