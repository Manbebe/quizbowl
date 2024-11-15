const question = document.querySelector('.question-container');
const button = document.querySelector('.button-container');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector(".score-container");
let questionList = ["How old is Grimace?", "What is 938 x 10 / 4?", "What is my last name spelt backwards?", "What is the capital of France?", "What is Mr.Cooper's first name?", "This is a Quiz____!", "Is Pluto a planet (in my heart)?", "Who can rap faster, A human or AI?", "Is the book 'Hunger Games' about hungry people playing some video games?", "DO YOU LIKE BACON SAY YES PLEASE SAY YES I DEMAND YOU SAY YES!!!"];
let answerList = ["52", "2345", "kcamroccm", "paris", "louis", "bowl", "yes", "ai", "no", "yes"];
let score = 0;
let questionIndex = 0;

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    button.addEventListener("click", () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        }else{
            score -= 1;
            scoreContainer.textContent = "Score : " + score;
            questionIndex += 1;
            question.textContent = questionList[questionIndex];
         }
         ///endgame function here
         endgame ();
            input.value="";
    });

}
let endgame = () =>{
    if(questionIndex > 9){
        scoreContainer.textContent = "Final score: " + score;
        question.textContent = "Congrats meanie dont play again >:(";
        input.style.display = "none";
        button.style.display = "none";
    }
}

submitFunction();



