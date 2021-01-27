const connection = require("./connection");

class Role {

    constructor(connection) {
        this.connection = connection;
    };

    // View all Roles
    viewAllRoles() {

        console.log("Viewing All Roles...");

        return this.connection.query("select * from role", function (err, result) {

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