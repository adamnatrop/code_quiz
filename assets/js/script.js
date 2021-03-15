


// setting global varaibles for DOM placement 
var questH1Tag = document.getElementById("question");
var gameInfoPTag = document.getElementById('howToInfo');
var optList = document.getElementById("optionList");
var startBtn = document.getElementById("start");
var questionBox = document.getElementById("qBox")
var initialsForm = document.getElementById("formInitials")
var initialsInput = document.getElementById("initials");
var submitBtn = document.getElementById("submitBtn");
//var btnContainer = document.getElementById("btnContainer")



// global variables 

var questionIndex = 0;
var highScore = 0;
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
]
// {
//     qDescription: "What data tyle is a true/false value?",
//     correctAnswer: "a",
//     a: "Boolean",
//     b: "String",
//     c: "Array",
//     d: "Number"
// },

// {
//     qDescription: "How can you store mutliple pieces of information?",
//     correctAnswer: "a",
//     a: "Use an array",
//     b: "Use a string value",
//     c: "Use a boolean",
//     d: "Use a variable"
// },

// {
//     qDescription: "What is HTML",
//     correctAnswer: "b",
//     a: "Cascading Stylesheet",
//     b: "Hyper Text Markup Language",
//     c: "High Thought Markup Language",
//     d: "Holy Things Make Life"
// },

// {
//     qDescription: "What is CSS?",
//     correctAnswer: "d",
//     a: "Hyper Text Markup Language",
//     b: "Cool Stuff Style",
//     c: "Create Snappy Styles",
//     d: "Cascading Style Sheet"
// }








// starts Quiz 
startBtn.addEventListener("click", function(event) {
    // resets question index for second run through
    questionIndex = 0;
    // turns off start screen elements
    startBtn.style.display = "none" ;
    gameInfoPTag.style.display = "none";
    questH1Tag.style.display = "none";
    // goes to questions
    displayQuestion();
});

// submit score and initials
submitBtn.addEventListener("click", function(){
    localStorage.setItem("initials", initialsInput.value);
    localStorage.setItem("score", highScore);
})

// END GAME Function
function endofGame(){
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
        displayQuestion();
    })
}

// QUESTIONS AND ANSWERS
function displayQuestion(){
    // hides initials form on second play through
    initialsForm.style.display = "none";

    // creates container for question and answers
    var quizContainer = document.createElement("div");
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
    // checks array index to see if it has gone through each question
    if (questionIndex === questionsArray.length - 1){
        questionIndex = 0;
        endofGame();
        
     } else {
         // increase question index and goes back to display next question
         questionIndex++;
         displayQuestion();
     }
}
  











