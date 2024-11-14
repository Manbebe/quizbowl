const button = document.querySelector('.button-container');
const header = document.querySelector('.header');
const question = document.querySelector('.questions');
const input = document.querySelector('#input-field');
const outputContainer = document.querySelector('.output-container');
let scoreContainer = document.getElementById(".score-container");
let isFirstSubmission = true;
let questionList = ["How old is Grimace?", "What is 938 x 10 / 4?", "What is my last name spelt backwards?", "What is the capital of France?", "What is Mr.Cooper's first name?", "This is a Quiz____!", "Is Pluto a planet (in my heart)?", "Who can rap faster, A human or AI?", "Is the book 'Hunger Games' about hungry people playing some video games?", "DO YOU LIKE BACON SAY YES PLEASE SAY YES I DEMAND YOU SAY YES!!!" ];
let answerList = ["52", "2345", "kcamroccm", "paris", "louis", "bowl", "yes", "ai", "no", "yes" ];
let score = 0;
let questionIndex = 0;

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    button.addEventListener("click", () =>{
        if(input.value === answerList[questionIndex])(
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score:" + score;
        )else(
            score -= 1;
        )

    });
}
submitSwitch.addEventListener("click", () => {
    if (isFirstSubmission) {
        isFirstSubmission = false;
    } else {
        const userAnswer = document.getElementById('input-field').value;
        if (userAnswer === questionsArray[currentQuestionIndex].answer) {
            alert("Good boy ;)");
        } else {
            alert("BAD BOY >:(");
        }
    }
    document.getElementById('input-field').value = '';
    currentQuestionIndex = (currentQuestionIndex + 1) % questionsArray.length;
    document.querySelector('.questions').textContent = questionsArray[currentQuestionIndex].question;
});





