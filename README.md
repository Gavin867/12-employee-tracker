# The Flying Circus Tracker

![License Icon](https://img.shields.io/badge/license-GPL3.0-informational.svg)

A command line interface application which uses mySQL, Node, Util and Inquirer to store and manipulate organizational data.

## Table of Contents

- [Location](#locations)
- [Application Summary](#application-summary)
- [Demo](#demo)
- [Installation](#installation)
- [Testing](#testing)
- [Usage Instructions](#usage-instructions)
- [Future Development](#future-development)
- [Contributors](#contributors)
- [Resources](#resources)
- [Point of Contact](#point-of-contact)
- [License](#license)

## Location

GitHub Repository Link: https://github.com/Gavin867/The_Flying_Circus_Tracker

## Application Summary

The Flying Circus Tracker can be used to store organizational information in a mySQL database for easy reference. With this application you can perform the following tasks:

1. View existing data for departments, roles and employees.
2. Create and store a list of departments, roles and employees.
3. Reassign roles and managers.
4. Delete departments, roles, and employees from the database

## Demo

Click [here]() to view the demo video OR copy, paste, and execute the following link in your browser:

## Installation

1. Install mySQL and MySQL workbench using the directions outlined in the '[MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)'.
2. Clone the repository to your computer.
3. Open a new terminal instance in the Flying Circus Tracker code file and run "npm init -y" to install the necessary node modules.
4. Create a .env file in the root of the directory with the following data:

        DB_USER=root
        DB_PASS=**Your Password Here**
        DB_DATABASE=gear_db

6. Log into your mySQL workbench, copy the contents of Flying Circus Tracker's employee_DB.sql file into your workbench and hit the lightning button to create your database.
7. If you would like to use the seed data, copy the contents of Flying Circus Tracker's employee_seeds.sql file into your workbench and hit the lightning button to add the data to your tables.
8. In the Flying Circus Tracker file code terminal, type "node app" and hit ENTER.
9. A the application will launch and you're up and running!

## Testing

See usage instructions.

## Usage Instructions

1. To VIEW Departments, Roles, and/or Employees select a VIEW option from the MAIN MENU and hit ENTER.
2. To ADD a Department, Role or Employee, select the corresponding ADD option in the MAIN MENU. Answer prompts and hit ENTER to submit values.
3. To UPDATE an Employee's Role or Manager, select the corresponding UPDATE option in the MAIN MENU. Select desired values from the prompt list options and hit ENTER to select.
4. To DELETE a Department, Role or Employee, select the corresponding DELETE option in the MAIN MENU.  Select desired values from the prompt list options and hit ENTER to select.

## Future Development

Additional goals and application features for future devlopment include:

- The addition of error handling features tp all functions.
- Writing code to all the application to refer to departments, roles, and employees by name in success console messages for UPDATE and DELETE functions.
- Additional testing for breakage points and bug fixes.

## Contributors

- Gavin Calkins - https://github.com/Gavin867

## Resources

- Lessons from UW Full Stack Flex Boot Camp.
- Tutoring with Namita Shenai (https://github.com/NVK2016)


## Point of Contact

Have questions? Contact Gavin Calkins at [gavin.calkins@gmail.com](mailto:gavin.calkins@gmail.com?subject=Hi%20Gavin!%20I%20have%20a%20question%20about%20the%Flying=%20Circus%Tracker!).
 
## License

    Meili. An application that uses mySQL, Sequelize, Node.js and Handlebars to help you inventory and pack your outdoor gear.

    Copyright (C) 2021  Gavin B. Calkins 

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.