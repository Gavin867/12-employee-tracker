const connection = require("./connection");

class Role {

    constructor(connection) {
        this.connection = connection;
    };

    // View all Roles
    viewAllRoles() {
        return this.connection.query("SELECT * from role"); 
    }

    // Add Roles
    addArole() {
        return this.connection.query("INSERT INTO role SET ?", title);
    }

    // Delete Role

};

module.exports = new Role(connection); 