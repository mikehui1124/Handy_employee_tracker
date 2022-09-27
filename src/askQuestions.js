const inquirer = require('inquirer');
const mysql = require('mysql2');

// import the array of static questions to drive inquirer Q&A
const {menuQuestion,addDeptQuestion} = require('./questions.js');

// import querying functions to add or update the database
const {showEmployeeDB,showRoleDB,showDepartmentDB, addEmployeeDB, updateEmployeeRoleDB, addRoleDB, addDepartmentDB} = require('./queryDB.js');

// connect to db
const db = mysql.createConnection(
   {
     host: 'localhost',      
     user: 'root',
     // MySQL password
     password: 'bootcamp22',
     database: 'company_db'
   },    
 );

const askMenuQuestion = function() {
    inquirer
       .prompt(menuQuestion)
       .then((answer) => {

          switch (answer.menuChoice) {
             case 'View All Employees' : 
             
                console.log('View All Employees');
                showAllEmployee();
                break
            
             case 'Add Employee' :
                askAddEmployee();
                break
            
             case 'Update Employee Role' :
                askUpdateEmployeeRole();
                break
            
             case 'View All Roles' :
                console.log('View All Roles');
                showAllRole();
                break

             case 'Add Role' :
                askAddRole();
                break
             
             case 'View All Departments' :  
             console.log('View All Departments');              
                showAllDepartment();
                break

             case 'Add Department' :
                askAddDept();
                break
            
             case 'Quit' :
                console.log('You have quitted the progam.')
                break
          }
       });
}

var Departments ; 
var Roles ;
var FullNames ;
var ManagerNames;

// define 3 functions to get the list of record and use as dynamic question choices
const getDepartmentDB = function() {
   db.query(`SELECT id, name FROM department`, function (err, result) {      
      
       for (var i=0; i<result.length; i++ ) {       
       Departments.push(result[i].name);
        } 
     });
   }

const getRoleDB = function() {
   db.query(`SELECT * FROM roles`, function (err, result) {        
       for (var i=0; i<result.length; i++ ) {                
           Roles.push(result[i].title);
            } 
     });
}

const getEmployeeDB = function() {
   db.query(`SELECT * FROM employee`, function (err, result) {        
       for (var i=0; i<result.length; i++ ) {                
           FullNames.push(result[i].first_name + " " + result[i].last_name);                
            }                                 
     });     
}

// ask adding employee questions
const askAddEmployee = function() {
    // initialize the choice lists
   Roles =[];
   FullNames =[];
   ManagerNames=[];
   Departments=[];

   getRoleDB();
   getEmployeeDB();
   getDepartmentDB();
   ManagerNames = FullNames;
   ManagerNames.unshift("Null");

    inquirer
      .prompt([
         {
             type: 'input',
             message: "What is the employee's first name? ",
             name: 'firstName',
         },
         {
             type: 'input',
             message: "What is the employee's last name? ",
             name: 'lastName',
         },
         {
             type: 'list',
             message: "What is the employee's role? ",
             name: 'employeeRole',
             choices: Roles
         },
         {
             type: 'list',
             name: 'employeeManager',
             message: "What is the employee's manager? ",
             choices: ManagerNames
         }         
     ])
      .then((answer) => {     
         
         addEmployeeDB(answer);
         // show menu and ask menu questions
         askMenuQuestion();
      });
}

// ask role updating questions
const askUpdateEmployeeRole = function() {     
    getRoleDB();
    getEmployeeDB();

    inquirer
      .prompt([
         {
             type: 'list',
             name: 'updateEmployee',
             message: "Which employee's role do you want to update? ",
             choices: FullNames
         },
         {
             type: 'list',
             name: 'updateRole',
             message: "Which role do you want to assign the selected employee? ",
             choices: Roles
         }
     ])
      .then((answer) => {

         updateEmployeeRoleDB(answer);      
         askMenuQuestion();
      });
}


const askAddRole = function() {
   Departments=[];
   getDepartmentDB();

    inquirer
    .prompt([
      {
          type: 'input',
          message: "What is the name of the role? ",
          name: 'role',
      },
      {
          type: 'input',
          message: "What is the Salary of the role? ",                                                                                                                        
          name: 'salary',
      },
      {
          type: 'list',
          name: 'departChoice',
          message: 'Which department does the role belong to? ',
          choices: Departments        
      }    
  ])
    .then((answer) => {

       addRoleDB(answer);      
       askMenuQuestion();
    });
}

const askAddDept = function() {
    inquirer
    .prompt(addDeptQuestion)
    .then((answer) => {

       addDepartmentDB(answer);      
       askMenuQuestion();
    });
}

const showAllEmployee= function() {
    showEmployeeDB();
    askMenuQuestion();

}

const showAllRole= function() {
    showRoleDB();
    askMenuQuestion();

}

const showAllDepartment= function() {
    showDepartmentDB();
    askMenuQuestion();
}

// export menuQuestion as a beginning of the program
module.exports = askMenuQuestion;