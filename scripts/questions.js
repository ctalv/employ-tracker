// questions to be asked in cli

const mainQuestions = [
    {
        type: 'checkbox',
        name: 'whatToDo',
        message: 'What would you like to do?',
        choices: ['View all departments.', 'View all roles.','View all employees.', 'Add a department.', 'Add a role.', 'Add an employee.', 'Update an employee\'s role.','Quit'],
    }
];

const addDep = [
    {
        type: 'input',
        name: 'department',
        message: 'Type the new department name.',
    }
];

const addRol = [
    {
        type: 'input',
        name: 'title',
        message: 'Type the role title.',
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Type the role salary.',
    },
    {
        type: 'input',
        name: 'department',
        message: 'Type the department ID.',
    }
];

const addEmploy = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Type the first name.',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Type the last name.',
    },
    {
        type: 'input',
        name: 'role',
        message: 'Type the role ID.',
    },
    {
        type: 'input',
        name: 'manager',
        message: 'Type the manager ID.',
    }
];

const updateEmploy = [
    {
        type: 'input',
        name: 'id',
        message: 'Type the employee ID.',
    },
    {
        type: 'input',
        name: 'role',
        message: 'Type the role ID.',
    }
]


module.exports = [mainQuestions, addDep, addRol, addEmploy, updateEmploy];
// module.exports = addDepRol;
// module.exports = addEmploy;
