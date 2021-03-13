






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
var opt1LiTag = document.getElementById("option1");
var opt2LiTag = document.getElementById("option2");
var opt3LiTag = document.getElementById("option3");
var opt4LiTag = document.getElementById("option4");


// global variables 





// Objects containing questions and answers 

var welcomeScreen = {
    welcomeText: "Welcome to my Quiz!",
    howToText: "As you can see this is a timed challenge. Get the questions wrong and you will lose time. Complete the quiz and get the highscore! Click Start to begin!",
    pressStart: "Start"
};


const quizQuestions = {
};

var q1 = {
    question: "Which is a custom class in CSS?",
    correntAnswer: "a",
    a: ".heading ",
    b: "#heading",
    c: "heading",
    d: "h1"
};
var q2 = {
    question: "How do you specify an id in CSS",
    correntAnswer: "b",
    a: "Use a class symbol",
    b: "Put a # in front of the name",
    c: "Anything with a Main Tag",
    d: "I like bananas!"
}
var q3 = {
    question: "Why use CSS?",
    correntAnswer: "c",
    a: "To create animation",
    b: "To define a website structure",
    c: "To style a website",
    d: "To order pizza"
};

quizQuestions.obj1 = q1;
quizQuestions.obj2 = q2;
quizQuestions.obj3 = q3;
console.log()






// start screen displays Quiz heading, how the game works, start button
function askUserStartScreen (){
    optList.setAttribute("id","optionList-start");
    questH1Tag.textContent = welcomeScreen.welcomeText;
    gameInfoPTag.textContent = welcomeScreen.howToText;
    opt1LiTag.textContent = welcomeScreen.pressStart;
    opt1LiTag.addEventListener("click", askFirstQuestion)

}



function askFirstQuestion(){

    optList.setAttribute("id","optionList-on");
    gameInfoPTag.remove();

    questH1Tag.textContent = q1.question;
    opt1LiTag.textContent = q1.a;
    opt2LiTag.textContent = q1.b;
    opt3LiTag.textContent = q1.c;
    opt4LiTag.textContent = q1.d;
}





askUserStartScreen()




