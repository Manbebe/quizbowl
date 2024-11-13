const submitButton = document.querySelector('.submit');
const header = document.querySelector('.header');
const score = document.querySelector('.score');
const questions = document.querySelector('.questions');
const input = document.querySelector('.input-container');
const outputContainer = document.querySelector('.output-container');
const submitSwitch = document.getElementById("submit-switch");
let isFirstSubmission = true;

submitSwitch.addEventListener("click", () => {
    if (isFirstSubmission) {
        isFirstSubmission = false;
    } else {
        const userAnswer = document.getElementById('input-field').value;
        if (userAnswer === questionsArray[currentQuestionIndex].answer) {
            alert("Nice...i guess");
        } else {
            alert("DUMB ASS XD");
        }
    }
    document.getElementById('input-field').value = '';
    currentQuestionIndex = (currentQuestionIndex + 1) % questionsArray.length;
    document.querySelector('.questions').textContent = questionsArray[currentQuestionIndex].question;
});

const questionsArray = [
    { question: "How old is Grimace?", answer: "50" },
    { question: "What is 938 x 10 / 4?", answer: "2345" },
    { question: "What is my last name spelt backwards?", answer: "kcamroccm" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is Mr.Cooper's first name?", answer: "Louis" },
    { question: "This is a Quiz____!", answer: "bowl" },
    { question: "Is Pluto a planet (in my heart)?", answer: "yes" },
    { question: "Who can rap faster, A human or AI?", answer: "AI" },
    { question: "Is the book 'Hunger Games' about hungry people playing some video games?", answer: "no" },
    { question: "DO YOU LIKE BACON SAY YES PLEASE SAY YES I DEMAND YOU SAY YES BI-", answer: "yes" }
];

let currentQuestionIndex = 0;