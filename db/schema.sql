DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- parent table
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
-- child table
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)  
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(15) NOT NULL,
  last_name VARCHAR(15) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES roles(id),
  manager_id INT, 
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)  
);

