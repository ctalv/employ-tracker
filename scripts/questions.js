// questions to be asked in cli
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
const questions = [
    {
        type: 'list',
        name: 'questions',
        message: 'Welcome! What would you like to do?',
        choices: ['View all departments.','View all roles.','Add a department.','Add a role.','Add an employee.','Update an employee\'s role.' ],
    }
];

