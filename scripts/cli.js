// require inquirer
const inquirer = require('inquirer');
// import questions scripts/index.js
const questions = require('./questions.js')
const querys = require('./index.js')

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


            })
    }
}

// export CLI
module.exports(CLI);