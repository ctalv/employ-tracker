// require inquirer
const inquirer = require('inquirer');
// import questions scripts/index.js
// const questions = require('./questions.js')
// const querys = require('./index.js')
// const sqlLogic = require('./sql.js')

const questions = [
    {
        type: 'checkbox',
        name: 'whatToDo',
        message: 'Welcome! What would you like to do?',
        choices: ['View all departments.','View all roles.','Add a department.','Add a role.','Add an employee.','Update an employee\'s role.' ],
    }
];

// class constructor CLI
    // init
            // inquirer

class CLI {
    constructor () {

    }
    init () {
        inquirer
            .prompt(questions)
            .then((answers) => {
                // where is answer in array of choices
                return console.log(answers)

            })
            .catch((err) => {
                console.error(err);
                console.log(__dirname)
            })
    }
}

// export CLI
module.exports = CLI;