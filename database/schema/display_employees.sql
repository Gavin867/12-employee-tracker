SELECT
  employees.employee_first_name as 'First Name',
  employees.employee_last_name as 'Last Name',
  role_title as Title,
  role_salary as Salary,
  department_name as Deparment,
  CONCAT (
    managers.employee_first_name,
    ' ',
    managers.employee_last_name
  ) as Manager
FROM
  employees
  LEFT JOIN roles ON roles.role_id = employees.role_id
  LEFT JOIN departments ON departments.department_id = roles.department_id
  LEFT JOIN employees as managers ON managers.employee_id = employees.managers_id;
