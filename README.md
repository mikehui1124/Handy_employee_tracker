# challenge-12_handy_employee_tracker

This is a JavaScript source-code for a Employee Track using MySQL to provide an UI for managing staff database. The UI is a type of content management system(CMS) that run on command line input.
The app will be using Inquirer, MySQL and console_table of NPM as dependency. The app will be invoked by using the following command:

“node index.js”

The completed JavaScript source-code, modular functions, database schema files and package log (ie package.json file) are available in the following GitHub repo as Master branch,

-	https://github.com/mikehui1124/challenge-12_handy_employee_tracker

The walkthrough video demonstrates the workflow of the tracker is available at”.

-	https://drive.google.com/file/d/1z0yOEqFJE9i3rq_Q3lCA0xOQDwvm8miN/view

Description

The company database contains 3 tables of employee details,  roles and departments. The CLI app allows use to run a set of CRUD functions, namely,
-	Create employee record
-	Add new roles or departments
-	Edit an employee’s role
-	Show tables of employee, table of roles or table of departments from database


Snapshot of the employee tracker
![image](https://user-images.githubusercontent.com/105307687/192639123-f1ecdb12-efc3-4fd9-b8c9-494961c43915.png)

Acceptance criteria

The application will meet the following criteria expected by an app user,

•	When starting the app, I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

•	When choosing to view all department, I am presented with a formatted table showing department names and department ids

•	When choose to view all roles, I am presented with the job title, role id, the department that role belongs to, and the salary for that role

•	When choose to view all employees, I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report toWhen clicking on existing note on the left hand column, then that note appears in the right-hand column

•	When choose to add department, I am prompted to enter the name of the department and that department is added to the database

•	When choose to add a role, I am prompted to enter the name, salary, and department for the role and that role is added to the database

•	When choose to add an employee, I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

•	When choose to update an employee’s role, I am prompted to select an employee to update and their new role and this information is updated in the database
