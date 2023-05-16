# Employee Tracker

![License](https://img.shields.io/badge/license-MIT-green)

## Description
This is a node run application that allows a user to manage a mysql database.

Future development:
- running without having to pull up mysql cli
- user can update employee manager
- user can view employees by manager
- user can view employees by department
- user can delete department
- user can delete role
- user can delete employee
- user can view department budget
    
## Table of Contents 
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

    
## Installation
- Node v16
- MySQL
- inquirer npm
- mysql2 npm
    
## Usage
To use this application, you must:
1. Download this repositiory to your local machine.
2. In the terminal, download the dependencies: 

        npm i 
3. In the terminal, type:

        mysql -u root -p
4. Enter your local password.
5. Input the following:

        source db/schema.sql; source schema.sql
6. Open a new terminal and type the following:

        node index.js
7. Answer the questions.

 
## Credits
N/A


## Tests
N/A
    

## Questions
If you have any questions, email me at clairetalverson@gmail.com or message me on my GitHub at https://github.com/ctalv.

## License
This project is covered under the MIT License.