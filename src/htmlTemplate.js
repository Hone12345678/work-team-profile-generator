const Manager = require("../lib/Manager");


const generateEmployee = employeeText => {

  // console.log(employeeText[0].name)
  // filter through the employeeText 
  // need to return sections to our template
  // MANAGER
  // ENGINEER
  // INTERN
let htmlArray = []

  function managerHtml(i) {
    return `  
    <div class="card" style="width: 18rem;">
    <div class="card-body p-3 mb-2 bg-primary text-white">
    <h5 class="card-title">${employeeText[i].name}, ${employeeText[i].role}</h5>
    <p class="card-text"> ID: ${employeeText[i].id}</p>
    <p class="card-text"> Email: ${employeeText[i].email}</p>
    <p class="card-text"> Office number: ${employeeText[i].officeNum}</p>
        </div>
        </div>
   `
  }

  function engineerHtml(i) {
    return `  

    <div class="card" style="width: 18rem;">
    <div class="card-body p-3 mb-2 bg-secondary text-white">
      <h5 class="card-title">${employeeText[i].name}, ${employeeText[i].role}</h5>
      <p class="card-text"> ID: ${employeeText[i].id}</p>
      <p class="card-text"> Email: ${employeeText[i].email}</p>
      <p class="card-text"> GitHub: ${employeeText[i].github}</p>
          </div>
          </div> 
`
  }

  function internHtml(i) {
    return `
    
    <div class="card" style="width: 18rem;">
    <div class="card-body p-3 mb-2 bg-success text-white">
      <h5 class="card-title">${employeeText[i].name}, ${employeeText[i].role}</h5>
      <p class="card-text"> ID: ${employeeText[i].id}</p>
      <p class="card-text"> Email: ${employeeText[i].email}</p>
      <p class="card-text"> School: ${employeeText[i].school}</p>
          </div>
          </div> 
    `
  }


  for (var i = 0; i < employeeText.length; i++) {

    console.log(i, employeeText[i])

    if (employeeText[i].role === 'manager') {
      console.log("should be manager", employeeText[i].role)
     htmlArray.push(managerHtml(i))

    } else if (employeeText[i].role === 'engineer') {
      console.log("should be engineer", employeeText[i].role)
      htmlArray.push(engineerHtml(i))

    }
    else if (employeeText[i].role === 'intern') {
      console.log("should be intern", employeeText[i].role)
      htmlArray.push(internHtml(i))
    }
  }
htmlArray.join('')

  if (!employeeText) {
    return '';
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
        <link rel="stylesheet" href="./assets/css/seatgeek.css" />
        <title>Work Team Profile</title>
        
    </head>
    <body>
    
    
    ${htmlArray}
        
    </body>
    </html>

  `;
};

module.exports = generateEmployee