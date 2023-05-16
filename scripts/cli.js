// require inquirer
const inquirer = require('inquirer');
const mysql = require('mysql2');
// import questions scripts/index.js

// const querys = require('./index.js')
// const sqlLogic = require('./sql.js')
const questions = require('./questions.js')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'welcome2SQL!',
    database: 'company_db'
});

// class constructor CLI
// init
// inquirer

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
let viewDepartments = 'department' // sql select
let viewRoles // sql select
let viewEmployees // sql select
let addDepartment // sql insert into
let addRole // sql insert into 
let addEmployee // sql insert into
let updateEmployeeRole // sql update?

/* BONUS 

let updateEmployeeManager
let viewEmployeesByManager
let viewEmployeesByDepartment
let deleteDepartment
let deleteRole
let deleteEmployee
let viewDepartmentBudge

*/
const variables = 
 [
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
]

class CLI {
    constructor() {

    }
    init() {
        inquirer
            .prompt(questions)
            .then((answers) => {
                // where is answer in array of choices
                console.log(answers.whatToDo)
                console.log(questions[0].choices)

                let index = questions[0].choices.indexOf(answers.whatToDo[0]);

                console.log(variables[index])

                let action = variables[index]
                
                

                connection.promise().query(`SELECT * FROM ${action}`)
                    .then(([rows, fields]) => {
                        console.table(rows);
                    })
                    .catch(console.log)
                    .then(() => connection.end());
                // return console.log(answers)

            })
            .catch((err) => {
                console.error(err);
                console.log(__dirname)
            })
    }
}

// export CLI
module.exports = CLI;