const inquirer = require('inquirer');


// set up 2 groups of array for the static questions 
const menuQuestion = [
    {
        type: 'list',
        name: 'menuChoice',
        message: "What would you like to do? ",
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ]
    }
]

const addDeptQuestion = [
    {
        type: 'input',
        message: "What is the name of the department? ",
        name: 'department',
    }    
]


// export all question arrays
module.exports = {
    menuQuestion,
    addDeptQuestion
     };
