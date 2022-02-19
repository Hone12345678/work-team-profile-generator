// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// set up inquirer, classes, and writeToFile

const path = require('path');
const inquirer = require ('inquirer');
const Manager = require ('./lib/Manager')
const Intern = require ('./lib/Intern')
const Engineer = require ('./lib/Engineer')
const writeToFile = require ('./utils/writeToFile')


// const OUTPUT_DIR = path.resolve(__dirname, 'dist')
// const OUTPUT_PATH = path.join(OUTPUT_DIR, 'index.html')
// const render = require('./src/htmlTemplate.js')

// team member array to store all of the imputs from the user
const teamMemArray = []

// id array to store the arrays associated with the team members
const IDarr = []


// collecting team Member information
function teamMem(){
  //creating team manager and collection information from user regarding the manager
    function createManager() {
        inquirer.prompt([
 
            {
              type: 'input',
              name: 'teamManageName',
              message: 'What is you team managers name?',
            },
            {
                type: 'input',
                name: 'empID',
                message: 'Please enter the managers employee ID',
            },
              {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter the email. (Required)',
                validate: managerEmail => {
                  if (managerEmail) {
                    return true;
                  } else {
                    console.log('You need to enter an email!');
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'officeNum',
                message: 'Enter the office number of the manager. (Required)',
                validate: officeNum => {
                  if (officeNum) {
                    return true;
                  } else {
                    console.log('You need to enter an office number!');
                    return false;
                  }
                }
            },
            
        ])
        .then((data) => { 
          data.role = 'manager'
          console.log(data);
            const manager = new Manager(data.teamManageName, data.empID, data.managerEmail, data.officeNum, data.role)
            teamMemArray.push(manager)
            IDarr.push(data.empID)
            createTeam()
        })

    }

    function createTeam(){
      
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'what type of team member would you like to add? (Required)',
                choices: ['Engineer', 'Intern', 'done']
            }
        ])
        .then((data) => {
            switch(data.memberChoice){
                case 'Engineer':
                    createEngineer()
                    break;
                case 'Intern':
                    createIntern()
                    break;
                default:
                buildTeam(teamMemArray)
            }
        })

    }



    function createEngineer(){
      //creating engineer and collection information from user regarding the engineer
        inquirer.prompt([
 
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is you team Engineers name?',
              },
              {
                  type: 'input',
                  name: 'empID',
                  message: 'Please enter the Engineers employee ID',
              },
                {
                  type: 'input',
                  name: 'engineerEmail',
                  message: 'Enter the email. (Required)',
                  validate: engineerEmail => {
                    if (engineerEmail) {
                      return true;
                    } else {
                      console.log('You need to enter an email!');
                      return false;
                    }
                  }
              },
              {
                type: 'input',
                name: 'github',
                message: 'Enter the engineers github. (Required)',
                validate: github => {
                  if (github) {
                    return true;
                  } else {
                    console.log('You need to enter a github account!');
                    return false;
                  }
                }
            },
        ])
        .then((data) => {
          data.role = 'engineer'
            const engineer = new Engineer(data.engineerName, data.empID, data.engineerEmail, data.role, data.github)
            teamMemArray.push(engineer)
            IDarr.push(data.empID)
            createTeam()
        })
    }

    //creating intern and collection information from user regarding the intern
    function createIntern(){
            inquirer.prompt([
     
                {
                    type: 'input',
                    name: 'internName',
                    message: 'What is you team Intern name?',
                  },
                  {
                      type: 'input',
                      name: 'empID',
                      message: 'Please enter the Intern employee ID',
                  },
                    {
                      type: 'input',
                      name: 'internEmail',
                      message: 'Enter the email. (Required)',
                      validate: internEmail => {
                        if (internEmail) {
                          return true;
                        } else {
                          console.log('You need to enter an email!');
                          return false;
                        }
                      }
                  },
                  {
                    type: 'input',
                    name: 'school',
                    message: 'Enter the interns school. (Required)',
                    validate: school => {
                      if (school) {
                        return true;
                      } else {
                        console.log('You need to enter an email!');
                        return false;
                      }
                    }
                },
            ])
            .then((data) => {
              data.role = 'intern'
                const intern = new Intern(data.internName, data.empID, data.internEmail, data.role, data.school)
                teamMemArray.push(intern)
                IDarr.push(data.empID)
                createTeam()
            })
        }

    function buildTeam(team){

        writeToFile(team)
        // console.log(team)
    }
    createManager()
}

teamMem();
