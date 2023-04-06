const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("../team-generator/src/generateHTML");

const Engineer = require("../team-generator/lib/engineer");
const Intern = require("../team-generator/lib/intern");
const Manager = require("../team-generator/lib/manager");

const employees = [];

const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
        validate: (input) => {
          if (/^[a-zA-Z]+$/.test(input)) {
            return true;
          } else {
            console.log("Input must be in a valid format!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID:",
        validate: (input) => {
          if (/^\d+$/.test(input)) {
            return true;
          } else {
            console.log("ID must be a number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email:",
        validate: (input) => {
          if (/\S+@\S+\.\S+/.test(input)) {
            return true;
          } else {
            console.log("Input must be in valid email format!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
        validate: (input) => {
          if (/^\d+$/.test(input)) {
            return true;
          } else {
            console.log("Office Number must be a number!");
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      employees.push(manager);
    });
};

const createEmployees = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose a role for the employee: ",
        choices: ["Intern", "Engineer"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name:",
        validate: (input) => {
          if (/^[a-zA-Z]+$/.test(input)) {
            return true;
          } else {
            console.log("Input must be in a valid format!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID:",
        validate: (input) => {
          if (/^\d+$/.test(input)) {
            return true;
          } else {
            console.log("ID must be a number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email:",
        validate: (input) => {
          if (/\S+@\S+\.\S+/.test(input)) {
            return true;
          } else {
            console.log("Input must be in valid email format!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter the employee's github: ",
        when: (input) => input.role === "Engineer",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Input is not valid!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter the employee's school: ",
        when: (input) => input.role === "Intern",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Input is not valid!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "anotherEmployee",
        message: "Add another employee?",
      },
    ])
    .then((employeeInput) => {
      const { name, id, email, role, github, school, anotherEmplyoee } =
        employeeInput;

      if (role === "Engineer") {
        employees.push(new Engineer(name, id, email, github));
      } else if (role === "Intern") {
        employees.push(new Intern(name, id, email, school));
      }

      if (anotherEmplyoee) {
        return createEmployees();
      } else {
        return employees;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Successfully created team!");
    }
  });
};

createManager()
  .then(createEmployees)
  .then((employees) => {
    return generateHTML(employees);
  })
  .then((generatedHTML) => {
    return writeFile(generatedHTML);
  });
