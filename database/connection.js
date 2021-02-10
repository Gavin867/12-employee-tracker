const mysql = require("mysql");

const util = require("util");

require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
});

connection.query = util.promisify(connection.query);

module.exports = connection;