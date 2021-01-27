const connection = require("./db/functions/connection");

class Roles {

    constructor(connection) {
        this.connection = connection;
    };

    // View all Roles
    viewAllRoles() {

        console.log("Viewing All Roles...");

        return this.connection.query("select * from roles", function (err, result) {

            if (err) {

                console.log(err);

            } else {

                console.table(result);

                init();
            }
        });
    }

    // Add Roles
    // addRole() {
        
    // }

    // Delete Role

};

module.exports = new Role(connection); 