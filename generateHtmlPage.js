// create a function that changes a path based on questions answers 
// create a function that makes an html page
function generateHtmlPage(data){
//    passing in manager or employees Array.
const generateManagerCard = function(managerData) {
// copy bootstrap card 
    return `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${managerData.Manager_Name}</h5>
    <p class="card-text">${managerData.Manager_ID},${managerData.Manager_EM}, ${managerData.Manager_EM}, ${managerData.Office_Number}</p>
  </div>
</div>
` 
}
// first basic main layout  
// bootstrap include link below in main template
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Employee Structure</title>
</head>
<body>
${generateManagerCard(data)}
<script>

</script>

    </body>
</html>`
}



// Exporting function (Hint: require in other files. Give access)
module.exports = generateHtmlPage;