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
            alert("Good job...I know you cheated...YOUR NOT SLICK I SPECIFICLY DESIGNED THIS TO BE IMPOSSIBLE YOU STUPID CHEATING PIECE OF SHI-");
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
    { question: "unlimited bacon, but no more viddeo game, or game, unlimited game, or no more games", answer: "01110111 01100101 01101100 01101100 00101110 00101110 00101110 01111001 01101111 01110101 00100000 01100110 01101001 01101110 01100001 01101100 01101100 01111001 00100000 01100110 01101111 01110101 01101110 01100100 00100000 01101101 01100101" }
];

let currentQuestionIndex = 0;