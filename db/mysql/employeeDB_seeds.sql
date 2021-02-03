INSERT INTO department (department_name)
VALUES ("Silly Walks");

INSERT INTO role (title, salary, department_id)
VALUES ("Minister of Silly Walks", 50000, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Cleese", 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Palin", 1, 1);

-- DELETE FROM employee WHERE id=2;