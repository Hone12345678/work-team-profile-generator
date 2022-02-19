
const fs = require('fs');
const path = require('path');
// const inquirer = require ('inquirer');
const OUTPUT_DIR = path.resolve(__dirname, '../dist')
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'index.html')
const render = require('../src/htmlTemplate.js')



//function to write the user input to the html page
function writeToFile(teamMembers) {
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    // console.log(teamMembers)
    fs.writeFileSync(OUTPUT_PATH, render(teamMembers),'utf-8' )


    // return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


module.exports = writeToFile