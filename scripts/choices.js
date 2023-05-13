// require mysql2
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
let viewDepartments 
let viewRoles
let viewEmployees
let addDepartment
let addRole
let addEmployee
let updateEmployeeRole

/* BONUS 

let updateEmployeeManager
let viewEmployeesByManager
let viewEmployeesByDepartment
let deleteDepartment
let deleteRole
let deleteEmployee
let viewDepartmentBudge

*/

const choices = [
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
]

module.exports(choices)