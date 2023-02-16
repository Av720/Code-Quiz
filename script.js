//select each card div by id and assign to variables
const mainQuestionsDiv = document.querySelector("#main-questions-div");
const mainQuestionh2 = document.querySelector("#main-question-h2");
const mainScoreDiv = document.querySelector("#main-score-div");
const mainLeaderboardDiv = document.querySelector("#main-leaderboard-div");

//CREATE AND OBERJCT/ARRAY FOR EACH QUESTION
var questions = [
    {
        questionText: "",
        options: [""],
        answer: "",
    },
    {
        questionText: "",
        options: [
            "1. ",
            "2. ",
            "3. ",
            "4. ",
        ],
        answer: "",
    },
    {
        questionText:
            "",
        options: [""],
        answer: "",
    },
    {
        questionText:
            "",
        options: [
            "",
            "",
            "",
            "",
        ],
        answer: "",
    },
    {
        questionText:
            "",
        options: [""],
        answer: "",
    },
];
