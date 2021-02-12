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
  ("Coffee Spiller", 35000, 1),
  ("Norwegian Blue Expert", 25000, 2),
  ("Plumage Analyst", 20000, 2),
  ("Head Inquisitor", 60000, 3),
  ("Comfy Chair Operator", 40000, 3),
  ("Soft Pillow Applicator", 20000, 3),
  ("Arguer", 40000, 4),
  ("Front Desk", 30000, 4),
  ("Albatross Vendor", 20000, 5);

INSERT INTO
  employees (employee_first_name, employee_last_name, role_id, managers_id)
VALUES
  ("Richard", "Teacup", 1, NULL),
  ("Sandy", "Beech", 1, 1),
  ("Joe", "King", 2, NULL),
  ("Charles", "Praline", 2, 3),
  ("Cardinal", "Ximinez", 3, NULL),
  ("Cardinal", "Biggles", 3, 5),
  ("Cardinal", "Fang", 3, 5),
  ("John", "Barnard", 4, NULL),
  ("Wanda", "Fish", 4, 8),
  ("Tracy", "Beck", 5, NULL);