const submitButton = document.querySelector('.submit');
const header = document.querySelector('.header');
const score = document.querySelector('.score');
const questions = document.querySelector('.questions');
const input = document.querySelector('.input-container');
const outputContainer = document.querySelector('.output-container');
const submitSwitch = document.getElementById("submit-switch");
submitSwitch.addEventListener("click", () => {
    document.getElementById('input-field').value = '';

    currentQuestionIndex = (currentQuestionIndex + 1) % questionsArray.length;
    document.querySelector('.questions').textContent = questionsArray[currentQuestionIndex];
});

const questionsArray = [
    "How old is Grimace?",
    "What is 938 x 10 / 4?",
    "What is my last name spelt backwards?",
    "What is the capital of France?",
    "What is Mr.Cooper's first name?",
    "This is a Quiz____!",
    "Is Pluto a planet (in my heart)?",
    "Who can rap faster, A human or AI?",
    "Is the book 'Hunger Games' about hungry people playing some video games?",
    "DO YOU LIKE BACON SAY YES PLEASE SAY YES I DEMAND YOU SAY YES BI-",
    "Is it raining today this was made?"
];

let currentQuestionIndex = 0;