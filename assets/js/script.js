


// setting global varaibles for DOM placement 
var questH1Tag = document.getElementById("question");
var gameInfoPTag = document.getElementById('howToInfo');
var optList = document.getElementById("optionList");
var startBtn = document.getElementById("start");
var questionBox = document.getElementById("qBox")
var initialsForm = document.getElementById("formInitials")
var initialsInput = document.getElementById("initials");
var submitBtn = document.getElementById("submitBtn");
var timer = document.getElementById("timer");
//var btnContainer = document.getElementById("btnContainer")



// global variables 

var questionIndex = 0;
var highScore = 0;
var secondsLeft = 0;
var quizContainer = "";
var reachedEndGame = false; 
var timerInterval = "";

initialsForm.style.display = "none"

// Array for question objects 

var questionsArray = [
    
{
    qDescription: "Which is a custom class in CSS?",
    correctAnswer: ".heading",
    answers: [".heading", "#heading", "heading", "h1"],
    
},

{
    qDescription: "How do you specify an id in CSS",
    correctAnswer: "Put a # in front of the name",
    answers: ["Use a class symbol", "Put a # in front of the name", "Anything with a Main Tag", "I like bananas!"],
    
},

{
    qDescription: "Why use CSS?",
    correctAnswer: "To style a website",
    answers: ["To create animation", "To define a website structure", "To style a website", "To order pizza"],
    
},

{
    qDescription: "What can you store in a variable?",
    correctAnswer: "All of the above",
    answers: ["String data", "Numbers", "Boolean", "All of the above"],
    
},

{
    qDescription: "What data type is a true/false value?",
    correctAnswer: "Boolean",
    answers: ["Boolean","String","Array","Number"]
    
},

{
    qDescription: "How can you store mutliple pieces of information?",
    correctAnswer: "Use an array",
    answers: ["Use an array", "Use a string value", "Use a boolean", "Use a variable"]
  
},

{
    qDescription: "What is HTML",
    correctAnswer: "Hyper Text Markup Language",
    answers: ["Cascading Stylesheet", "Hyper Text Markup Language", "High Thought Markup Language", "Holy Things Make Life"]
    
},

{
    qDescription: "What is CSS?",
    correctAnswer: "Cascading Style Sheet",
    answers: ["Hyper Text Markup Language", "Cool Stuff Style", "Create Snappy Styles", "Cascading Style Sheet"]
}
]

// Array for HighScores

// this is taking the JSON string and parsing out as an object OR if that is null sets it to an empty array
    // this is to fix the .push method problem of it not reading as an array 
var highScoreObj = JSON.parse(localStorage.getItem("highScores")) || [];


// starts Quiz 
startBtn.addEventListener("click", function(event) {
   
    //start timer
    quizTimer();
    // resets endgametimer call
    reachedEndGame = false;
    // resets question index for second run through
    questionIndex = 0;
    // turns off start screen elements
    startBtn.style.display = "none";
    gameInfoPTag.style.display = "none";
    questH1Tag.style.display = "none";
    // goes to questions
    displayQuestion();
});

// submit score and initials
submitBtn.addEventListener("click", function(){
    // logs the player initials and score to an object
    var playerScoreObj = {
    
        player: initialsInput.value,
        score: highScore
    }
    
    //pushes the player score object into the highscore array
    highScoreObj.push(playerScoreObj);
    // sets the highscore object to local storage in a JSON string for the HighScore Page to grab and populate the table
    localStorage.setItem("highScores", JSON.stringify(highScoreObj));
})

// starts the timer for the question countdown
function quizTimer(){
    // initial starting time
    secondsLeft = 60;
    timerInterval = setInterval(function(){
        // counts time down
        secondsLeft--;
        // displays time in the top right
        timer.textContent = secondsLeft;
        // if time is less then 0 or is 0 stop timer
        if (secondsLeft <= 0){
            // stops the timer and clears it
            clearInterval(timerInterval);
            // removes container
            quizContainer.remove();
            endofGame();
        }    
    },1000)
}


// END GAME Function
function endofGame(){
    clearInterval(timerInterval);
    // Creates div container to store title and buttons
    var gameOverContainer = document.createElement("div");
    gameOverContainer.setAttribute("id", "qBoxContainer");
    questionBox.appendChild(gameOverContainer);

    // creates p tag and sets to h1 class for styling
    var h1EndGame = document.createElement("p");
    h1EndGame.setAttribute("class","gameInfo gameTitle");
    h1EndGame.textContent = "GAME OVER"
    gameOverContainer.appendChild(h1EndGame);

    // creates div tag to display score
    var score = document.createElement("div");
    score.setAttribute("class", "gameInfo gameTitle");
    score.textContent = "Your Score: " + highScore;
    gameOverContainer.appendChild(score);

    // shows form to enter initials
    initialsForm.style.display = "block";

    //creates a div tag, names it playBtn, sets class to button, sets contents to Play Again
    var playBtn = document.createElement("div");
    playBtn.setAttribute("class", "button");
    playBtn.textContent = "Play Again";
    gameOverContainer.appendChild(playBtn);


    playBtn.addEventListener("click", function(){
        gameOverContainer.remove();
        // reset highscore
         highScore = 0;
        quizTimer();
        displayQuestion();
    })
}

// QUESTIONS AND ANSWERS
function displayQuestion(){
    // hides initials form on second play through
    initialsForm.style.display = "none";

    // creates container for question and answers
    quizContainer = document.createElement("div");
    quizContainer.setAttribute("id", "qBoxContainer");
    questionBox.appendChild(quizContainer);

    // pulls question from question array
    var question = questionsArray[questionIndex];
    
    // creates p tag to display question from question object
    var pTag = document.createElement("p");
    pTag.setAttribute("class","gameInfo gameTitle");
    pTag.textContent = question.qDescription;
    quizContainer.appendChild(pTag);

    // runs through each question answer array to create div tag button and display contents
    question.answers.forEach(function(item){
        var div = document.createElement("div");
        div.setAttribute("class", "button");
        div.textContent = item;
        quizContainer.appendChild(div);
        
        // adds event lister to each div tag button as its created
        div.addEventListener("click", function(event){
            // passes through object info to check answers
            checkAnswer(item, question.correctAnswer, quizContainer);
            event.stopPropagation();
        });
    });     
} 

// CHECK ANSWERS
function checkAnswer(userAnswer, correctAnswer, quizContainer){
    // removes question container from DOM
    quizContainer.remove();
    // checks the answer the user selected against the correct answer stored in the array
    if (userAnswer === correctAnswer){
     highScore++;
    }
    if (userAnswer !== correctAnswer){
        secondsLeft -= 10;
    }
    // checks array index to see if it has gone through each question
    if (questionIndex === questionsArray.length - 1){
        questionIndex = 0;
        clearInterval(timerInterval);
        endofGame();
        
     } else {
         // increase question index and goes back to display next question
         questionIndex++;
         displayQuestion();
     }    
}
  