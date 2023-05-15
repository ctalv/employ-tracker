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

class CLI {
    constructor() {

    }
    init() {
        inquirer
            .prompt(questions)
            .then((answers) => {
                // where is answer in array of choices
                connection.promise().query("SELECT * FROM department")
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