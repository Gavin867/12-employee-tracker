const connection = require("./db/functions/connection");

class Employees {

    constructor(connection) {
        this.connection = connection;
    };

    // View all deparments

    viewAllEmployees() {

        console.log("Viewing All Employees...");

        return this.connection.query("select * from employees", function (err, result) {

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