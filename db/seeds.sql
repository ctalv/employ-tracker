INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('HR');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John','Doe', 1, null),
       ('Mike','Chan', 2, 1),
       ('Ashley','Rodriguez', 3, null),
       ('Kevin','Tupik', 4, 3);  
