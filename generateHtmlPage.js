// create a function that changes a path based on questions answers 
// create a function that makes an html page
function generateHtmlPage(data){
//    passing in manager or employees Array.
const generateManagerCard = function(managerData) {
// copy bootstrap card 
    return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-title">${managerData.Manager_Name}</h2>
    <h3>Manager</h3>
    <ul>
     <li>Id: ${managerData.Manager_ID}</li>
     <li>Email: ${managerData.Manager_EM}</li> 
     <li>Office Number: ${managerData.Office_Number}</li>
    </ul>

  </div>
</div>
` 
}
// first basic main layout  
// bootstrap include link below in main template
const generateEngineers = function(engineerData){
    if (add_employee === Engineer) {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Employee Structure</title>
</head>
<body>
<script>
${generateEngineers(data)}
${generateManagerCard(data)}
</script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>`
}
}
// Last
}



// Exporting function (Hint: require in other files. Give access)
module.exports = generateHtmlPage;