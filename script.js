const questions = [
    {
        question: "What was the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Who is the President of US?",
        a: "Donald Trump",
        b: "Joe Biden",
        c: "Hillary Clinton",
        d: "Bernie Sanders",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1993",
        b: "1994",
        c: "1995",
        d: "1996",
        correct: "c"
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.querySelector('.question-container');
const questionHeader = document.querySelector('.question-header');
const answerOptions = document.querySelector('.answer-options');
const optionA = document.querySelector('.option-a');
const optionB = document.querySelector('.option-b');
const optionC = document.querySelector('.option-c');
const optionD = document.querySelector('.option-d');
const submitButton = document.querySelector('.submit-button');
const resultContainer = document.querySelector('.result-container');
const resultText = document.querySelector('.result-text');
const reloadButton = document.querySelector('.reload-button');

function showQuestion() {
    questionContainer.style.display = 'block';
    const question = questions[currentQuestion];
    questionHeader.textContent = question.question;
    optionA.textContent = question.a;
    optionB.textContent = question.b;
    optionC.textContent = question.c;
    optionD.textContent = question.d;
    submitButton.disabled = true;
}

function clearSelection() {
    const selectedOption = answerOptions.querySelector('input:checked');
    if (selectedOption) {
        selectedOption.checked = false;
    }
}

answerOptions.addEventListener('change', () => {
    submitButton.disabled = false;
});

submitButton.addEventListener('click', () => {
    const selectedOption = answerOptions.querySelector('input:checked');
    if (questions[currentQuestion].correct === selectedOption.value) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        clearSelection();
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultText.textContent = `You answered correctly at ${score}/4 questions.`;
}

reloadButton.addEventListener('click', () => {
    location.reload();
});

showQuestion();

