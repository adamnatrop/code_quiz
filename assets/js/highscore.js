// set variables for DOM elements
var tableDataPlayer = document.getElementById("playerOne");
var tableDataScore = document.getElementById("playerOneScore");
var highScoreTable = document.getElementById("table");

// Pull in local storage array of objects and parse the data into a new variable
playerScoresArray = JSON.parse(localStorage.getItem("highScores"));




// run a for each loop on the array and deconstruct the object into player and score variables
playerScoresArray.forEach(function({player, score}){
   
   // create a table row in the existing table on the DOM
    var tableRow = document.createElement("tr");
    highScoreTable.appendChild(tableRow);
    // create a td tag and write the player initials
    var dataPlayer = document.createElement("td");    
    dataPlayer.textContent = player;
    tableRow.appendChild(dataPlayer);
    // create a td tag and write the player score
    var dataScore = document.createElement("td");
    tableRow.appendChild(dataScore);
    dataScore.textContent = score;
       
})
