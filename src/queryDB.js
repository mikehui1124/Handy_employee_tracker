const mysql = require('mysql2');
const cTable = require('console.table');

// connect to database to insert and update records
const db = mysql.createConnection(
    {
      host: 'localhost',      
      user: 'root',
      // MySQL password
      password: 'bootcamp22',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

// set function to add employee record to DB  
const addEmployeeDB = function(answer) {
    //console.log(answer.firstName, answer.employeeRole, answer.employeeManager); 

    var role_ID; 
    var manager_ID;   
    
    // nested promise().query statements to get role_ID & manager_ID and pass on to the next SQL command to create new record
    db.promise().query(`SELECT * FROM roles WHERE title = "${answer.employeeRole}"`, function (err, response) {        
        role_ID = parseInt(response[0].id);

        if (answer.employeeManager != 'Null') {
          
          const managerName = answer.employeeManager.split(" ");
          db.promise().query(`SELECT * FROM employee WHERE last_name = "${managerName[1]}"`, function (err, result) {        
            manager_ID = parseInt(result[0].id);    
          
            db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
            VALUES ("${answer.firstName}", "${answer.lastName}", ${role_ID}, ${manager_ID})`, function(err, result) {
                if (err) {
                console.log(err);
                }                
              });                
            });

        } else if (answer.employeeManager == 'Null') {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
            VALUES ("${answer.firstName}", "${answer.lastName}", ${role_ID}, null)`, function(err, result) {
                if (err) {
                console.log(err);
                }                
              });     
        }
      });
}

// query function to update existing employee roles
const updateEmployeeRoleDB = function(answer) {

    const employeeName = answer.updateEmployee.split(" ");
    var title_id;          

    //nested query statements
    db.query(`SELECT * FROM roles WHERE title = "${answer.updateRole}"`, function (err, result) {        
               
        title_id = parseInt(result[0].id);
        db.query(`UPDATE employee SET role_id = ? WHERE last_name = "${employeeName[1]}"`, title_id, (err, result)=> {
            if (err) {
                console.log(err);
                }
                console.log(result);
        });        
      });  
}

// query function to add new role
const addRoleDB = function(answer) {
   
    var roleDepartment_id;  

    db.query(`SELECT * FROM department WHERE name = "${answer.departChoice}"`, (err, result) => {   
        roleDepartment_id = parseInt(result[0].id);

        db.query(`INSERT INTO roles (title, salary, department_id)
        VALUES ("${answer.role}", ${parseInt(answer.salary)}, ?)`, roleDepartment_id,(err, result) => {
            if (err) {
            console.log(err);
            }
            console.log(result);
        });            
      });    
}

// query function to add new department
const addDepartmentDB = function(answer) {
    
    db.query(`INSERT INTO department (name) VALUES ("${answer.department}")`, (err, result) => {
        if (err) {
        console.log(err);
        }
        console.log(result);
    });
}

// show all employee record in table including manager_full name
const showEmployeeDB = function() {
    
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name AS department, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name 
    FROM employee 
    AS manager RIGHT OUTER JOIN employee ON manager.id = employee.manager_id
    JOIN roles ON employee.role_id = roles.id 
    JOIN department ON roles.department_id = department.id
    ORDER BY employee.id`, function (err, result) {                
        console.log('_____________________________________________');
        console.table(result);
      });
}

// show all role record
const showRoleDB = function() {
    
    db.query(`SELECT roles.id, roles.title, department.name AS department, roles.salary 
    FROM roles JOIN department ON roles.department_id = department.id`, function (err, result) {        
        console.log('_____________________________________________');
        console.table(result);
      });
}

const showDepartmentDB = function() {
    
    db.query(`SELECT id, name FROM department`, function (err, result) {  
        console.log('_____________________________________________');       
        console.table(result);
      });
}

module.exports = {
    showEmployeeDB, showRoleDB,showDepartmentDB, 
    addEmployeeDB, updateEmployeeRoleDB, addRoleDB, addDepartmentDB
};