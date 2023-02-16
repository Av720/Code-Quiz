//select each card div by id and assign to variables
const mainQuestionsDiv = document.querySelector("#main-questions-div");
const mainQuestionh2 = document.querySelector("#main-question-h2");
const mainScoreDiv = document.querySelector("#main-score-div");
const mainLeaderboardDiv = document.querySelector("#main-leaderboard-div");

// ----------------------------------------------------------------------------------

// FUNCTION TO APPEAR CARDS AND HIDE THEM - TIE THESE TO THE GLOBAL VARS

function showHideCards() {
    mainQuestionsDiv.setAttribute("hidden", true);
    mainQuestionh2.setAttribute("hidden", true);
    mainScoreDiv.setAttribute("hidden", true);
}



// VARIABLES FOR THE HIDDEN RESULTS > TIE WITH DOM

var mainResultsDiv = document.querySelector("#main-results-div")
var mainResultsText = document.querySelector("#main-results-textp")

// ----------------------------------------------------------------------------------
//CREATE AND OBERJCT/ARRAY FOR EACH QUESTION
var questions = [
    {
        title: "Which of the following is an advantage of using JavaScript?",
        choices: [
            "1. Less server interaction",
            "2. Immediate feedback to the visitors",
            " 3. Increased interactivity",
            "4. All of the above.",
        ],
        answer: "4.All of the above.",
    },

    // ----------------------------------------------------------------------------------
    {
        title:
            "Can you pass a anonymous function as an argument to another function?",
        choices: ["1. True", "2. False"],
        answer: "1. True",
    },

    // ----------------------------------------------------------------------------------

    {
        title:
            "Which built-in method calls a function for each element in the array?",
        choices: ["1. while()", "2. loop()", "3. forEach", "4. None of the above"],
        answer: "3. forEach()",
    },

    // ----------------------------------------------------------------------------------
    {
        title:
            "Which of the following function of Number object returns the number's value?",
        choices: [
            "1.toString()",
            "2. valueOf()",
            "3. toLocaleString()",
            "4. toPrecision()",
        ],
        answer: "valueOf",
    },

    // ----------------------------------------------------------------------------------
    {
        title:
            "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
        choices: ["1. substr()", "2. search()", "3. lastIndexOf()", "4. indexOf()"],
        answer: "",
    },
];


// ----------------------------------------------------------------------------------

// GLOBAL VARIABLES & add event listener 

var mainID //intervalID; 
var mainTime; //time
var mainQuestion;  //currentQuestion;

document.querySelector("#main-start-button").addEventListener("click", showHideCards);

// ----------------------------------------------------------------------------------

// DIAPLAY TIME ON PAGE 

// create local variable for time 
var timeShow = document.querySelector("#time");
function displayTime() {
    timeDisplay.textContent = time;
}

//reduce the time by 5 function 
function timerCountdown() {
    time--;
    displayTime();
    if (time < 1) {
        endQuiz();
    }
}

// ----------------------------------------------------------------------------------

//CREATE FUNCTION FOR (startMainQuiz)

// main quiz start function

function startMainQuiz() {

    hiddencards();
    questioncard.removeAttribute("hidden");

    var question = 0;
    showQuestion();

    mainTime = questions.length * 5

    var intervalID = setInterval(countdown, 1000);
    displayTime();
}



// ----------------------------------------------------------------------------------
