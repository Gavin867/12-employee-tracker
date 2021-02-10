INSERT INTO
  departments (department_name)
VALUES
  ("Ministry of Silly Walks"),
  ("Pet Shop"),
  ("Spanish Inquisition"),
  ("Argument Clinic"),
  ("Albatross!");

INSERT INTO
  roles (role_title, role_salary, department_id)
VALUES
  ("Minister of Silly Walks", 50000, 1),
  ("Executive Assistant", 35000, 1),
  ("Norwegian Blue Expert", 25000, 2),
  ("Plumage Analyst", 20000, 2),
  ("Head Inquisitor", 60000, 3),
  ("Comfy Chair Inquisitor", 40000, 3),
  ("Soft Pillow Operator", 20000, 3),
  ("Arguer", 40000, 4),
  ("Front Desk", 30000, 4),
  ("Albatross Vendor", 20000, 5);

INSERT INTO
  employees (employee_first_name, employee_last_name, role_id, manager_id)
VALUES
  ("Richard", "Teacup", 1, 1),
  ("Sandy", "Beech", 1, NULL),
  ("Joe", "King", 2, 2),
  ("Charles", "Praline", 2, NULL),
  ("Cardinal", "Ximinez", 3, 3),
  ("Cardinal", "Biggles", 3, NULL),
  ("Cardinal", "Fang", 3, NULL),
  ("John", "Barnard", 4, 4),
  ("Wanda", "Fish", 4, NULL),
  ("Tracy", "Beck", 5, 5);