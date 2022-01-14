

const generateEmployee = employeeText => {


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
        <title>Document</title>
    </head>
    <body>
    
    <section class="my-3" id="employee">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
          <p>${employeeName}</p>
        </section>
        
    </body>
    </html>

  `;
};