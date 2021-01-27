const connection = require("./connection");

const app = require("../../app");

class Department {

    constructor(connection) {
        this.connection = connection;
    };

    // View all deparments

    viewAllDepartments() {

        console.log("Viewing All Departments...");

        return this.connection.query("SELECT * from department", function (err, result) {

            if (err) {

                console.log(err);

            } else {

                console.table(result);

                app.init();
            }
        });
    }

    // Add departments
    // addDepartment() {

    // }

    // Delete Departments

};

module.exports = new Department(connection); 