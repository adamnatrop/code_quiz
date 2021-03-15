


// setting global varaibles for DOM placement 
var questH1Tag = document.getElementById("question");
var gameInfoPTag = document.getElementById('gameInfo');
var optList = document.getElementById("optionList");
var startBtn = document.getElementById("start");
var questionBox = document.getElementById("qBox")
//var btnContainer = document.getElementById("btnContainer")



// global variables 

var object = "";
var highScore = 0;







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









// Functions for program flow







function startScreenDisplay(display){
startBtn.addEventListener("click", function() {
    startBtn.style.display = display;
    gameInfoPTag.style.display = display;
    questH1Tag.style.display = display;
    displayQuestion();
})
}


function displayQuestion(){

    
    
    var quizContainer = document.createElement("div");
    quizContainer.setAttribute("id", "qBox");
    questionBox.appendChild(quizContainer);

    var randomIndex = Math.floor(Math.random() * questionsArray.length);
    var question = questionsArray[randomIndex];
    console.log(randomIndex);

    var pTag = document.createElement("p");
    pTag.setAttribute("class","h1");
    pTag.textContent = question.qDescription;
    quizContainer.appendChild(pTag);

    

    question.answers.forEach(function(item){
        var div = document.createElement("div");
            div.setAttribute("class", "button");
            div.textContent = item;
            
            quizContainer.appendChild(div);
            // div.addEventListener("click", checkAnswer(div.textContent,question.correctAnswer));
            div.addEventListener("click", function(){
                checkAnswer(item, question.correctAnswer, quizContainer, question.answered, randomIndex);
            });
    })  ;   

}

function checkAnswer(userAnswer, correctAnswer, quizContainer, questionAnswered, index){


    if (userAnswer === correctAnswer){
        highScore++;

        //console.log(highScore);

        quizContainer.remove();
        

        displayQuestion();

    } else {

       
    }

   
  

}


function endGameInitials(){

}






// INITIAL CALL TO START

startScreenDisplay("none"); // set to "block" to display













