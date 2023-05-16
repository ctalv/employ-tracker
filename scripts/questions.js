// questions to be asked in cli

const mainQuestions = [
    {
        type: 'checkbox',
        name: 'whatToDo',
        message: 'Welcome! What would you like to do?',
        choices: ['View all departments.','View all roles.','Add a department.','Add a role.','Add an employee.','Update an employee\'s role.' ],
    }
];

const addDepRol = [
    {
        type: 'input',
        name: 'addSomething',
        message: '',
    }
];

const addEmploy = [
    {
        type: 'input',
        name: 'addSomething',
        message: '',
        }
];


module.exports = [mainQuestions, addDepRol, addEmploy];
// module.exports = addDepRol;
// module.exports = addEmploy;
