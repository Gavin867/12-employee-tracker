SELECT
  role_title as Title,
  role_salary as Salary,
  department_name as Deparment
FROM
  roles
  LEFT JOIN departments ON departments.department_id = roles.department_id