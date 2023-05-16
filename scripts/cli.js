// require inquirer
const inquirer = require('inquirer');
const mysql = require('mysql2');
// import questions scripts/index.js

// const querys = require('./index.js')
// const sqlLogic = require('./sql.js')
const [mainQuestions, addDep, addRol, addEmploy] = require('./questions.js')

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
let viewRoles = 'role' // sql select
let viewEmployees = 'employee' // sql select
let addDepartment = 'department' // = ['department', inquirer.prompt(questions)]// sql insert into
let addRole = 'role' // sql insert into 
let addEmployee = 'employee'// sql insert into
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
        viewDepartments, // 0
        viewRoles, // 1
        viewEmployees, // 2
        addDepartment, // 3
        addRole, // 4
        addEmployee, // 5
        updateEmployeeRole // 6
    ]

class CLI {
    constructor() {

    }
    init() {
        inquirer
            .prompt(mainQuestions)
            .then((answers) => {
                // where is answer in array of choices
                console.log(answers.whatToDo)
                console.log(mainQuestions[0].choices)

                let index = mainQuestions[0].choices.indexOf(answers.whatToDo[0]);

                console.log(variables[index])

                let table = variables[index]

                if (index <= 2) {

                    connection.promise().query(`SELECT * FROM ${table}`)
                        .then(([rows, fields]) => {
                            console.table(rows);
                        })
                        .catch(console.log)
                        .then(() => connection.end());

                } else if (index === 3) {
                    inquirer
                        .prompt(addDep)
                        .then((answers) => {
                            console.log(table)
                            connection.promise().query(`INSERT INTO ${table} (name) VALUES ('${answers.department}')`)
                                .then(([rows, fields]) => {
                                    console.table(rows);
                                })
                                .catch(console.log)
                                .then(() => connection.end());
                        })
                }  else if (index === 4) {
                    inquirer
                        .prompt(addRol)
                        .then((answers) => {
                            console.log(table)
                            connection.promise().query(`INSERT INTO ${table} (title, salary, department_id) VALUES ('${answers.title}',${answers.salary},${answers.department})`)
                                .then(([rows, fields]) => {
                                    console.table(rows);
                                })
                                .catch(console.log)
                                .then(() => connection.end());
                        })
                } else if (index === 5) {
                    inquirer
                        .prompt(addEmploy)
                        .then((answers) => {
                            console.log(answers)
                            console.log(table)
                            connection.promise().query(`INSERT INTO ${table} (first_name, last_name, role_id, manager_id) VALUES ('${answers.firstName}','${answers.lastName}',${answers.role},${answers.manager})`)
                                .then(([rows, fields]) => {
                                    console.table(rows);
                                })
                                .catch(console.log)
                                .then(() => connection.end());
                        })
                }


            })
            .catch((err) => {
                console.error(err);
                console.log(__dirname)
            })
        // this.init();

    }
}

// export CLI
module.exports = CLI;