const connection = require("./db/functions/connection");

class Department {

    constructor(connection) {
        this.connection = connection;
    };

    // View all deparments

    viewAllDepartments() {

        console.log("Viewing All Departments...");

        return this.connection.query("select * from department", function (err, result) {

            if (err) {

                console.log(err);

            } else {

                console.table(result);

                init();
            }
        });
    }

    // Add departments

    // Delete Departments

};

module.exports = new Department(connection); 