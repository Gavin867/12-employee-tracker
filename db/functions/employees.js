const connection = require("./connection");

class Employee {

    constructor(connection) {
        this.connection = connection;
    };

    // View all Employees

    viewAllEmployees() {

        console.log("Viewing All Employees...");

        return this.connection.query("select * from employee", function (err, result) {

            if (err) {

                console.log(err);

            } else {

                console.table(result);

                init();
            }
        });
    }

    // Add Employee
    // addEmployee() {
        
    // }

    // Delete Employee

};

module.exports = new Employee(connection); 