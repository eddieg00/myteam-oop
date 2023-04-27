const generateCards = (team) => {
    // console.log(team)
    let allCards = '';
    // console.log(team)
  
    //for each of my empolyees 
    for (let i = 0; i < team.length; i++) {
      // if that emp is a manager
      if (team[i].getRole() === 'Manager') {
        // generate a manager card
        const managerCard = `
        <div class="card m-3" style="width: 18rem;">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title">${team[i].getName()}</h5>
            <h6 class="card-subtitle mb-2">${team[i].getRole()}</h6>
          </div>
          <div class="card-body">
            <p class="card-text">ID: ${team[i].getId()}</p>
            <p class="card-text">Email: <a href="Email:${team[i].getEmail()}">${team[i].getEmail()}</a></p>
          </div>
        </div>
        `;
        // -- add that card to all cards
        allCards += managerCard;
      } else if (team[i].getRole() === 'Intern') {
        const internCard = `
        <div class="card m-3" style="width: 18rem;">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title">${team[i].getName()}</h5>
            <h6 class="card-subtitle mb-2">${team[i].getRole()}</h6>
          </div>
          <div class="card-body">
            <p class="card-text">ID: ${team[i].getId()}</p>
            <p class="card-text">Email: <a href="Email:${team[i].getEmail()}">${team[i].getEmail()}</a></p>
            <p class="card-text">School: ${team[i].getSchool()}</p>
          </div>
        </div>
        `;
        allCards += internCard;
      } else if (team[i].getRole() === 'Engineer') {
        const engineerCard = `
        <div class="card m-3" style="width: 18rem;">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title">${team[i].getName()}</h5>
            <h6 class="card-subtitle mb-2">${team[i].getRole()}</h6>
          </div>
          <div class="card-body">
            <p class="card-text">ID: ${team[i].getId()}</p>
            <p class="card-text">Email: <a href="Email:${team[i].getEmail()}">${team[i].getEmail()}</a></p>
            <p class="card-text">GitHub: <a href="https://github.com/${team[i].getGithub()}" target="_blank">${team[i].getGithub()}</a></p>
          </div>
        </div>
        `;
        allCards += engineerCard;
      }
    }
  
    // -- if that employee is a intern
    // -- -- gen an intern card
    // -- -- add that acard to all cards
  
    // -- if that emp is an eng
    // -- -- gen an eng card
    // -- -- add that acard to all cards
    return allCards;
  };
  
 export default team => {
    
    return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
          </head>
          <body>
            <header>
              <nav class="navbar navbar-dark bg-danger mb-5">
                <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
              </nav>
            </header>
            <main>
              <div class="container">
                <div class="row">
                  ${generateCards(team)}
                </div>
              </div>
            </main>
          </body>
        </html>
      `;
  };
  