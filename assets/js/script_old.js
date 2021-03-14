
// Idea for storing questions in objects 


// // Objects containing questions and answers 




// const quizQuestions = {
// };

// var q1 = {
//     question: "Which is a custom class in CSS?",
//     correntAnswer: "a",
//     a: ".heading ",
//     b: "#heading",
//     c: "heading",
//     d: "h1"
// };
// var q2 = {
//     question: "How do you specify an id in CSS",
//     correntAnswer: "b",
//     a: "Use a class symbol",
//     b: "Put a # in front of the name",
//     c: "Anything with a Main Tag",
//     d: "I like bananas!"
// }
// var q3 = {
//     question: "Why use CSS?",
//     correntAnswer: "c",
//     a: "To create animation",
//     b: "To define a website structure",
//     c: "To style a website",
//     d: "To order pizza"
// };

// quizQuestions.obj1 = q1;
// quizQuestions.obj2 = q2;
// quizQuestions.obj3 = q3;
// console.log()






// display coding quiz intro
// display start button 

//user clicks start button
    // start timer function

    // start question 1 logic flow
        // display question 1
        // display 4 options
            // option 1
                // user clicks, log answer for checking
                    // check answer true / false - store answers in varibles? or objects? or array?
                        // if correct continue flow
                        // if incorrect remove 5 seconds from timer, then continue
                // go to function question 2
            // option 2
                // user clicks, log answer for checking
                    // if correct continue flow
                    // if incorrect remove 5 seconds from timer, then continue
                // go to function question 2
            // option 3
                // user clicks, log answer for checking
                    // if correct continue flow
                    // if incorrect remove 5 seconds from timer, then continue
                // go to function question 2
            // option 4
                // user clicks, log answer for checking
                    // if correct continue flow
                    // if incorrect remove 5 seconds from timer, then continue
                // go to function question 2


//timer function when user clicks start

// code snippets to use for DOM 
// questH1Tag.textContent = "";
// optionList.remove();
//
//
//


// setting global varaibles for DOM placement 
var questH1Tag = document.getElementById("question");
var gameInfoPTag = document.getElementById('gameInfo');
var optList = document.getElementById("optionList");
var startBtn = document.getElementById("start");



startScreenDisplay("none"); // set to "block" to display


function startScreenDisplay(display){
startBtn.addEventListener("click", function() {
    startBtn.style.display = display;
    gameInfoPTag.style.display = display;
    questH1Tag.style.display = display;

})
}





function displayQuestion(){

}




// var opt1LiTag = "";
// var opt2LiTag = "";
// var opt3LiTag = "";
// var opt4LiTag = "";






// global variables 

var object = "";
var highScore = 0;




// Array for question objects 

var questionsArray = [
    
{
    question: "Which is a custom class in CSS?",
    correctAnswer: 0,
    answers: [".heading", "#heading", "heading", "h1"]
  
},

{
    question: "How do you specify an id in CSS",
    correctAnswer: "b",
    answers: ["Use a class symbol", "Put a # in front of the name", "Anything with a Main Tag", "I like bananas!"]
   
},

// {
//     question: "Why use CSS?",
//     correctAnswer: "c",
//     a: "To create animation",
//     b: "To define a website structure",
//     c: "To style a website",
//     d: "To order pizza"
// },

// {
//     question: "What can you store in a variable?",
//     correctAnswer: "d",
//     a: "String data",
//     b: "Numbers",
//     c: "Boolean",
//     d: "All of the above"
// },

// {
//     question: "What data tyle is a true/false value?",
//     correctAnswer: "a",
//     a: "Boolean",
//     b: "String",
//     c: "Array",
//     d: "Number"
// },

// {
//     question: "How can you store mutliple pieces of information?",
//     correctAnswer: "a",
//     a: "Use an array",
//     b: "Use a string value",
//     c: "Use a boolean",
//     d: "Use a variable"
// },

// {
//     question: "What is HTML",
//     correctAnswer: "b",
//     a: "Cascading Stylesheet",
//     b: "Hyper Text Markup Language",
//     c: "High Thought Markup Language",
//     d: "Holy Things Make Life"
// },

// {
//     question: "What is CSS?",
//     correctAnswer: "d",
//     a: "Hyper Text Markup Language",
//     b: "Cool Stuff Style",
//     c: "Create Snappy Styles",
//     d: "Cascading Style Sheet"
// }
]


// Welcome Screen Object
var welcomeScreen = {
    welcomeText: "Welcome to my Quiz!",
    howToText: "As you can see this is a timed challenge. Get the questions wrong and you will lose time. Complete the quiz and get the highscore! Click Start to begin!",
    pressStart: "Start"
};



// Program Start Flow




































// // start screen displays Quiz heading, how the game works, start button
// function askUserStartScreen (){
   
    
//     // writes content from welcome screen object to H1 tag
//     questH1Tag.textContent = welcomeScreen.welcomeText;
//     gameInfoPTag.textContent = welcomeScreen.howToText;

//     // Creates <li> tag for item 1 and sets the option id 
//     var listItemOne = document.createElement("Li");
//     listItemOne.setAttribute("id", "option1");
//     document.body.children[1].children[0].children[0].children[2].appendChild(listItemOne);

//     // sets the <li> tag variable which is called later to write object data on screen
//     opt1LiTag = document.getElementById("option1");

//     // writes the content on screen for list item 1 START
//     opt1LiTag.textContent = welcomeScreen.pressStart;
//     opt1LiTag.addEventListener("click", createOrderedList);
    
//     return
// };


// function createOrderedList() {

//     opt1LiTag.removeEventListener("click", createOrderedList);
    
//     // Creates <li> tag for item 1 and sets the option id 
//     var listItemOne = document.createElement("Li");
//     listItemOne.setAttribute("id", "option1");
//     document.body.children[1].children[0].children[0].children[2].appendChild(listItemOne);

//     // sets the <li> tag variable which is called later to write object data on screen
//     opt1LiTag = document.getElementById("option1");


//     // Creates <li> tag for item 2 and sets the option id 
//     var listItemTwo = document.createElement("Li");
//     listItemTwo.setAttribute("id", "option2");
//     document.body.children[1].children[0].children[0].children[2].appendChild(listItemTwo);

//     // sets the <li> tag variable which is called later to write object data on screen
//     opt2LiTag = document.getElementById("option2");
    
//     // Creates <li> tag for item 3 and sets the option id   
//     var listItemThree = document.createElement("Li");
//     listItemThree.setAttribute("id", "option3");
//     document.body.children[1].children[0].children[0].children[2].appendChild(listItemThree);

//     // sets the <li> tag variable which is called later to write object data on screen
//     opt3LiTag = document.getElementById("option3");
    
//     // Creates <li> tag for item 4 and sets the option id 
//     var listItemFour = document.createElement("Li");
//     listItemFour.setAttribute("id", "option4");
//     document.body.children[1].children[0].children[0].children[2].appendChild(listItemFour);

//     // sets the <li> tag variable which is called later to write object data on screen
//     opt4LiTag = document.getElementById("option4");
    
//     askQuestion();

//     return
// };



// function askQuestion(){

   
//     // Pull random question from question array store in object
//     var randomIndex = Math.floor(Math.random() * questionsArray.length);
//     object = questionsArray[randomIndex];

//     // turns on the css style for the choice boxes
//     // optList.setAttribute("id","optionList-on");

//     // Removes inital game info stored in the <p> tag
//     gameInfoPTag.remove();

//     // Displays questions and choices to the DOM
//     questH1Tag.textContent = object.question;
//     opt1LiTag.textContent = object.a;
//     opt2LiTag.textContent = object.b;
//     opt3LiTag.textContent = object.c;
//     opt4LiTag.textContent = object.d;

//     // Event Listner for each choice
//     opt1LiTag.addEventListener("click", checkAnswer(opt1LiTag.textContent));
//     opt2LiTag.addEventListener("click", askQuestion);
//     opt3LiTag.addEventListener("click", askQuestion);
//     opt4LiTag.addEventListener("click", askQuestion);

//     checkAnswer();
// };


// function checkAnswer(item){

//    if (item === questionsArray[0].a){
//         highScore++
//         console.log(highScore);   
//     }else {
//        // askQuestion();
//     } 
    
// };





// when opt1LiTag is clicked and is equal to questionsArray[0].a add to the highschool 









// optList.setAttribute("id","optionList-on");
//     gameInfoPTag.remove();

//     questH1Tag.textContent = q1.question;
//     opt1LiTag.textContent = q1.a;
//     opt2LiTag.textContent = q1.b;
//     opt3LiTag.textContent = q1.c;
//     opt4LiTag.textContent = q1.d;