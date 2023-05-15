// questions to be asked in cli

const questions = [
    {
        type: 'checkbox',
        name: 'whatToDo',
        message: 'Welcome! What would you like to do?',
        choices: ['View all departments.','View all roles.','Add a department.','Add a role.','Add an employee.','Update an employee\'s role.' ],
    }
];


module.exports = questions;
