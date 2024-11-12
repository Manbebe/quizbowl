const submitButton = document.querySelector('.submit');
const header = document.querySelector('.header');
const score = document.querySelector('.score');
const questions = document.querySelector('.questions');
const inputContainer = document.querySelector('.input-container');
const outputContainer = document.querySelector('.output-container');
const submitSwitch = document.getElementById("submit-switch");
submitSwitch.addEventListener("click", () => {
    document.getElementById('name').value = '';

    currentQuestionIndex = (currentQuestionIndex + 1) % questionsArray.length;
    document.querySelector('.questions').textContent = questionsArray[currentQuestionIndex];
});

const questionsArray = [
    "How old is Grimace?",
    "What is 938 x 10 / 4?",
    "What is my last name spelt backwards?",
    "What is the capital of France?",
    "What is 2 + 2?",
    "Name a primary color.",
    "What is the largest planet in our solar system?",
    "What is the square root of 64?",
    "Who wrote 'To Kill a Mockingbird'?",
    "What is the boiling point of water in Celsius?"
];

let currentQuestionIndex = 0;