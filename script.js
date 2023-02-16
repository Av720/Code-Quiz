//select each card div by id and assign to variables
const mainQuestionsDiv = document.querySelector("#main-questions-div");
const mainQuestionh2 = document.querySelector("#main-question-h2");
const mainScoreDiv = document.querySelector("#main-score-div");
const mainLeaderboardDiv = document.querySelector("#main-leaderboard-div");

// ----------------------------------------------------------------------------------

//CREATE AND OBERJCT/ARRAY FOR EACH QUESTION
var questions = [
    {
        questionText: "Which of the following is an advantage of using JavaScript?",
        options: [
            "1. Less server interaction",
            "2. Immediate feedback to the visitors",
            " 3. Increased interactivity",
            "4. All of the above.",
        ],
        answer: "4.All of the above.",
    },

    // ----------------------------------------------------------------------------------
    {
        questionText:
            "Can you pass a anonymous function as an argument to another function?",
        options: ["1. True", "2. False"],
        answer: "1. True",
    },

    // ----------------------------------------------------------------------------------

    {
        questionText:
            "Which built-in method calls a function for each element in the array?",
        options: ["1. while()", "2. loop()", "3. forEach", "4. None of the above"],
        answer: "3. forEach()",
    },

    // ----------------------------------------------------------------------------------
    {
        questionText:
            "Which of the following function of Number object returns the number's value?",
        options: [
            "1.toString()",
            "2. valueOf()",
            "3. toLocaleString()",
            "4. toPrecision()",
        ],
        answer: "valueOf",
    },

    // ----------------------------------------------------------------------------------
    {
        questionText:
            "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
        options: ["1. substr()", "2. search()", "3. lastIndexOf()", "4. indexOf()"],
        answer: "",
    },
];

// ----------------------------------------------------------------------------------
