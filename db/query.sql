SELECT *
FROM employee
JOIN roles ON employee.role_id = roles.id;

SELECT *
FROM roles
JOIN department ON roles.department_id = department.id;

SELECT *
FROM employee
JOIN employee ON employee.manager_id = employee.id;
SELECT *
FROM employee
JOIN employee ON employee.id = employee.manager_id;

--SELECT course_names.name AS Course_Name, department.name AS Dept_Name, department.id AS Depart_ID


SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary 
FROM employee
JOIN roles ON employee.role_id = roles.id;

SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name, employee.manager_id 
FROM employee
JOIN roles ON employee.role_id = roles.id
JOIN department ON roles.department_id = department.id;

SELECT roles.id, roles.title, department.name AS department, roles.salary
FROM roles
JOIN department ON roles.department_id = department.id;

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('dave', 'lee', 2, 3);

SELECT * FROM department 
WHERE name = "Engineering";

SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name AS department, 
CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name 
FROM employee 
AS manager RIGHT OUTER JOIN employee ON manager.id = employee.manager_id
JOIN roles ON employee.role_id = roles.id 
JOIN department ON roles.department_id = department.id
ORDER BY employee.id;




