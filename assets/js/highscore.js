
var tableDataPlayer = document.getElementById("playerOne");
var tableDataScore = document.getElementById("playerOneScore");
var highScoreTable = document.getElementById("table");

playerScoresArray = JSON.parse(localStorage.getItem("highScores"));

console.log(playerScoresArray)

// tableDataPlayer.textContent = playerScoresArray.players[0];
// tableDataScore.textContent = playerScoresArray.scores[0]



playerScoresArray.players.forEach(function(item){
    var tableRow = document.createElement("tr");
    highScoreTable.appendChild(tableRow);
    var tableDataPlayer = document.createElement("td");
    var tableDataScore = document.createElement("td");
    tableDataPlayer.textContent = item;
    tableRow.appendChild(tableDataPlayer);
    tableRow.appendChild(tableDataScore);

    playerScoresArray.scores.forEach(function(item){
        tableDataScore.textContent = item;
    })
});









    // <tr>
    //                     <th scope="col">2</th>
    //                     <td></td>
    //                     <td></td>
    //                 </tr>
    //                 <tr>
    //                     <th scope="col">3</th>
    //                     <td></td>
    //                     <td></td>

    // div.setAttribute("class", "button");
    // div.textContent = item;