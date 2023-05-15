// require mysql2
const mysql = require('mysql2');
const questions = require('./questions');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
let viewDepartments // sql select
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

function choices(answers) {
  let index = questions.findIndex(answers);

  variables[index]

  
}

module.exports(choices)