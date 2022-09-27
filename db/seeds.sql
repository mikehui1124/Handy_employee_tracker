INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Salesperson", 75000, 4),
       ("Lead Engineer", 120000, 1),
       ("Software Engineer", 80000, 1),
       ("Account Manager", 130000, 2),
       ("Accountant", 90000, 2 ),
       ("Legal Team Lead", 150000, 3),
       ("Legal assistant", 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Dony", 1, null ),
       ("Michael", "Chan", 2, 1),
       ("Ashley", "Rodriguez", 3, null),
       ("Kevin", "Tupik", 4, 3),
       ("Kumar", "Singh", 5, null),
       ("Malisa", "Brown", 6, 5),
       ("Sarah", "Lourd", 7, null),
       ("Johnny", "Chan", 8, 7);