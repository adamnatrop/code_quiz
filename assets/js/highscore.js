
var tableDataPlayer = document.getElementById("playerOne");
var tableDataScore = document.getElementById("playerOneScore");
var highScoreTable = document.getElementById("table");

playerScoresArray = JSON.parse(localStorage.getItem("highScores"));

//console.log(playerScoresArray)

// tableDataPlayer.textContent = playerScoresArray.players[0];
// tableDataScore.textContent = playerScoresArray.scores[0]



playerScoresArray.players.forEach(function(item){
    var tableRow = document.createElement("tr");
    highScoreTable.appendChild(tableRow);
    
    var dataPlayer = document.createElement("td");    
    dataPlayer.textContent = item;
    tableRow.appendChild(dataPlayer);

    var dataScore = document.createElement("td");
    tableRow.appendChild(dataScore);

    // playerScoresArray.scores.forEach(function(score){
    //     dataScore.textContent = score;
       
        
})
// });


// Object.keys(playerScoresArray).forEach(key => {
    
//     console.log(key,playerScoresArray[key]);

//     var tableRow = document.createElement("tr");
//     highScoreTable.appendChild(tableRow);
//     var dataPlayer = document.createElement("td");
//     var dataScore = document.createElement("td");
//     dataPlayer.textContent = playerScoresArray.player;
//     tableRow.appendChild(dataPlayer);
//     dataScore.textContent = playerScoresArray.score;
//     tableRow.appendChild(dataScore);

// })






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