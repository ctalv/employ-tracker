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
2. In the terminal, launch mysql by typing:

        mysql -u root -p
3. Enter your local password.
4. Input the following:

        source db/schema.sql; source db/seeds.sql;
5. Open a new terminal and download the dependencies by typing: 

        npm i
6. To run the app, type:

        node index.js
7. Answer the questions.

[DEMO Employee Tracker.webm](https://github.com/ctalv/employee-tracker/assets/122413805/daed602e-191c-4af0-a0ec-bd6bd90d0a5e)

 
## Credits
N/A


## Tests
N/A
    

## Questions
If you have any questions, email me at clairetalverson@gmail.com or message me on my GitHub at https://github.com/ctalv.

## License
This project is covered under the MIT License.
