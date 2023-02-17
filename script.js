//select each card div by id and assign to variables
const mainQuestionsDiv = document.querySelector("#main-questions-div");
const mainQuestionH2 = document.querySelector("#main-question-card");
const mainScoreDiv = document.querySelector("#main-score-div");
const mainLeaderboardDiv = document.querySelector("#main-leaderboard-div");
const questioncard = document.querySelector("#main-question-card");

// ----------------------------------------------------------------------------------

// FUNCTION TO APPEAR CARDS AND HIDE THEM - set attribute to true

function showHideCard() {
    mainQuestionsDiv.setAttribute("hidden", true);
    mainQuestionH2.setAttribute("hidden", true);
    mainScoreDiv.setAttribute("hidden", true);
}

// VARIABLES FOR THE HIDDEN RESULTS > TIE WITH DOM

var mainResultsDiv = document.querySelector("#main-results-div");
var mainResultsText = document.querySelector("#main-results-textp");

//hide result div
function hideText() {
    mainScoreDiv.style.display = "none";
}

// ----------------------------------------------------------------------------------
//CREATE AND OBERJCT/ARRAY FOR EACH QUESTION
var listOfquestions = [
    {
        questionNumber: 1,
        title: "Which of the following is an advantage of using JavaScript?",
        choices: [
            "1. Less server interaction",
            "2. Immediate feedback to the visitors",
            "3. Increased interactivity",
            "4. All of the above.",
        ],
        answer: "4. All of the above.",
    },

    // ----------------------------------------------------------------------------------
    {
        questionNumber: 2,
        title:
            "Can you pass a anonymous function as an argument to another function?",
        choices: ["1. True", "2. False"],
        answer: "1. True",
    },

    // ----------------------------------------------------------------------------------

    {
        questionNumber: 3,
        title:
            "Which built-in method calls a function for each element in the array?",
        choices: [
            "1. while()",
            "2. loop()",
            "3. forEach()",
            "4. None of the above",
        ],
        answer: "3. forEach()",
    },

    // ----------------------------------------------------------------------------------
    {
        questionNumber: 4,
        title:
            "Which of the following function of Number object returns the number's value?",
        choices: [
            "1.toString()",
            "2. valueOf()",
            "3. toLocaleString()",
            "4. toPrecision()",
        ],
        answer: "2. valueOf()",
    },

    // ----------------------------------------------------------------------------------
    {
        questionNumber: 5,
        title:
            "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
        choices: ["1. substr()", "2. search()", "3. lastIndexOf()", "4. indexOf()"],
        answer: "4. indexOf()",
    },
];

// ----------------------------------------------------------------------------------

// GLOBAL VARIABLES & add event listener

var mainID; //intervalID;
var mainTime; //time
var mainQuestion; //currentQuestion;

// document.querySelector("#main-start-button").addEventListener("click", showHideCard);
document
    .querySelector("#main-start-button")
    .addEventListener("click", startMainQuiz);

// ----------------------------------------------------------------------------------

// DIAPLAY TIME ON PAGE

// create local variable for time
var timeShow = document.querySelector("#time");
// var time = 500
// function displayTime() {
//     timeDisplay.innerHTML = time;
// }

// //reduce the time by 5 function
// function timerCountdown() {
//     time--;
//     displayTime();
//     if (time < 1) {
//         endQuiz();
//     }
// }

var time = 75000;
var doingQuiz = true;

function startTime() {
    setInterval(function () {
        if (!doingQuiz) return;
        if (time <= 0) return quizOver(`Time is up`);
        time -= 1000;
        document.querySelector("#time").innerHTML = `${time / 1000} Seconds`;
    }, 1000);
}

// ----------------------------------------------------------------------------------

//CREATE FUNCTION FOR (startMainQuiz)

// main quiz start function
var question = 0;
var correct = 0;

function startMainQuiz() {
    showHideCard();
    // hiddencards();
    questioncard.removeAttribute("hidden");

    startTime();
    showQuestion(question);

    // mainTime = questions.length * 5

    // var intervalID = setInterval(countdown, 1000);
    // displayTime();
}

// ----------------------------------------------------------------------------------

function quizOver(reason) {
    doingQuiz = false;
    document.querySelector("#time").innerHTML = `Quiz is Over!`;
    if (reason == "Time is up")
        document.querySelector("#time").innerHTML = `Time is up!`;
    console.log(`Quiz was finished because: ${reason}`);
    hideQuestions();
    document.querySelector(
        "#main-question-h2"
    ).innerText = `${reason}! Your score was ${correct}/${listOfquestions.length}`;
    document.querySelector(
        "#main-score-p"
    ).innerHTML = `${correct}/${listOfquestions.length}`;

    mainScoreDiv.removeAttribute("hidden");
}

function timeIsUp() {
    hideQuestions();
    document.querySelector("#time").innerHTML = `Time is up!`;
    document.querySelector(
        "#main-question-h2"
    ).innerText = `Time is Up! Your score was ${correct}/${listOfquestions.length}`;
}

// CREATE A FUNCTION TO SHOW THE QUESTION

function hideQuestions() {
    document.querySelector("#question1").style = "display: none;";
    document.querySelector("#question2").style = "display: none;";
    document.querySelector("#question3").style = "display: none;";
    document.querySelector("#question4").style = "display: none;";
    document.querySelector("#question5").style = "display: none;";
}

function showQuestion(questionNumber) {
    console.log(
        `Loading Question #${questionNumber + 1}: ${listOfquestions[questionNumber]["title"]
        }`
    );
    document.querySelector("#main-question-h2").innerText =
        listOfquestions[questionNumber]["title"];
    // console.log(listOfquestions[questionNumber]['choices'])
    for (var i = 0; i < listOfquestions[questionNumber]["choices"].length; i++) {
        // console.log("#question" + i + 1)
        document.querySelector("#question" + (i + 1)).style = "";
        document.querySelector("#question" + (i + 1)).innerHTML =
            listOfquestions[questionNumber]["choices"][i];
        document.querySelector("#question" + (i + 1)).value =
            listOfquestions[questionNumber]["choices"][i];
        document
            .querySelector("#question" + (i + 1))
            .addEventListener("click", checkAnswer);
    }
}

function checkAnswer(answer) {
    console.log(answer.srcElement.value);
    if (listOfquestions[question]["answer"] === answer.srcElement.value) {
        console.log("Question is correct, moving on to the next Question");
        correct++;
    } else {
        time -= 10000;
        console.log("Question is incorrect, moving onto the next question");
    }

    hideQuestions();
    if (question + 1 == listOfquestions.length) {
        console.log(`DONE!`);
        // document.querySelector("#main-question-h2").innerText = `Congratulations! Your score was ${correct}/${listOfquestions.length}`
        quizOver(`Congratulations`);
        return;
    }
    question++;
    showQuestion(question);
}
// ----------------------------------------------------------------------------------

var mainLeaderboard










// ----------------------------------------------------------------------------------

var clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearHighscores);

//clear local storage and display empty leaderboard
function clearHighscores() {
    localStorage.clear();
    renderLeaderboard();
}

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", returnToStart);

function correctAnswer(newChoiceButton) {
    return newChoiceButton.textContent === listOfquestions[mainQuestion].answer;
}
// ----------------------------------------------------------------------------------

