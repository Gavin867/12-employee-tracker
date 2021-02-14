INSERT INTO
  departments (department_name)
VALUES
  ("Ministry of Silly Walks"),
  ("Pet Shop"),
  ("Spanish Inquisition"),
  ("Argument Clinic"),
  ("ALABATROSS!!!");

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
  ("NOT A WAFERS VENDOR!!!", 20000, 5);

INSERT INTO
  employees (employee_first_name, employee_last_name, role_id, managers_id)
VALUES
  ("Richard", "Teacup", 1, NULL),
  ("Sandy", "Beech", 2, 1),
  ("Joe", "King", 3, NULL),
  ("Charles", "Praline", 4, 3),
  ("Cardinal", "Ximinez", 5, NULL),
  ("Cardinal", "Biggles", 6, 5),
  ("Cardinal", "Fang", 7, 5),
  ("John", "Barnard", 8, NULL),
  ("Wanda", "Gershwitz", 9, 8),
  ("Tracy", "Beck", 10, NULL);