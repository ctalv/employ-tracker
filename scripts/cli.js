// require inquirer
const inquirer = require('inquirer');
const mysql = require('mysql2');
// import questions scripts/index.js

// const querys = require('./index.js')
// const sqlLogic = require('./sql.js')
const [mainQuestions, addDep, addRol, addEmploy, updateEmploy] = require('./questions.js')

const connection = mysql.createPool({
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
let updateEmployeeRole = 'employee'; // sql update?

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


        // for (let run = 0; run < 1) {
        inquirer
            .prompt(mainQuestions)
            .then((answers) => {
                // where is answer in array of choices
                let index = mainQuestions[0].choices.indexOf(answers.whatToDo[0]);
                let table = variables[index]

                if (index <= 2) {

                    connection.promise().query(`SELECT * FROM ${table}`)
                        .then(([rows, fields]) => {
                            return console.table(rows), this.init();
                        })
                        .catch(console.log)
                    // .then(() => connection.end());
                    // .then(() => connection.release());

                } else if (index === 3) {
                    inquirer
                        .prompt(addDep)
                        .then((answers) => {
                            console.log(table)
                            connection.promise().query(`INSERT INTO ${table} (name) VALUES (?)`, [answers.department])
                                .then(([rows, fields]) => {
                                    return console.table(rows), this.init();
                                })
                                .catch(console.log)
                        })
                } else if (index === 4) {
                    inquirer
                        .prompt(addRol)
                        .then((answers) => {
                            console.log(table)
                            connection.promise().query(`INSERT INTO ${table} (title, salary, department_id) VALUES (?,?,?)`, [answers.title, answers.salary, answers.department])
                                .then(([rows, fields]) => {
                                    return console.table(rows), this.init();
                                })
                                .catch(console.log)
                        })
                } else if (index === 5) {
                    inquirer
                        .prompt(addEmploy)
                        .then((answers) => {
                            console.log(answers)
                            console.log(table)
                            connection.promise().query(`INSERT INTO ? (first_name, last_name, role_id, manager_id) VALUES ('?','?',?,?)`, [table, answers.firstName, answers.lastName, answers.role, answers.manager])
                                .then(([rows, fields]) => {
                                    return console.table(rows), this.init();
                                })
                                .catch(console.log)
                        })
                } else if (index === 6) {
                    inquirer
                        .prompt(updateEmploy)
                        .then((answers) => {
                            console.log(answers)
                            console.log(table)
                            connection.promise().query(`UPDATE ${table} SET role_id = ? WHERE id = ? `, [answers.role, answers.id])
                                .then(([rows, fields]) => {
                                    return console.table(rows), this.init();
                                })
                                .catch(console.log)
                        })
                } else if (index === 7) {
                    console.log(`
    THANKS!
                    `)
                    return connection.end()
                }

            })
            .catch((err) => {
                console.error(err);
                console.log(__dirname)
            })
        // this.init();

    }
}
// }

// export CLI
module.exports = CLI;