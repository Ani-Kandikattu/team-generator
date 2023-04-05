const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("../team-generator/src/generateHTML");

const Engineer = require("../team-generator/lib/engineer");
const Intern = require("../team-generator/lib/intern");
const Manager = require("../team-generator/lib/manager");
