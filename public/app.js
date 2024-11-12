var questionData = [
    {
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: ["function myFunction()",
            "function:myFunction()",
            "function=myFunction",
            "function=myFunction{}",

        ],
        
    },
    {
        question:"How to write an IF statement in JavaScript?",
        answer:"if(i==5)",
        options: ["if(i==5)",
            "if i=5 then",
            "if i==5 then",
            "if i=5",

        ],
        
    },
    {
        question:"JavaScript is the same as Java.",
        answer:"False",
        options: ["False",
            "True",

        ],
        
    },
    {
        question:"How do you declare a JavaScript variable?",
        answer:"var carName",
        options: ["variable carName",
            "var carName",
            "v carName",

        ],
        
    },
    {
        question:"Which operator is used to assign a value to a variable?",
        answer:"=",
        options: ["X",
            "-",
            "*",
            "=",

        ],
        
    }

];

var questionCount = document.getElementById("questionCount");
var question = document.getElementById("question");
var options = document.getElementById("options");
var progress = document.getElementById("progress");
var progress1 = document.getElementById("progress1");
var percent = document.getElementById("percent");

var questionIndex = 0;
var score = 0;
var progressValue = 1;

function renderQuestion(){
    if(questionIndex < questionData.length){
        var currentQuestion = questionData[questionIndex];
        progress.style.width = `${(progressValue / questionData.length)*100}%`;
        question.innerHTML=`<h2>${currentQuestion.question}</h2>`;
        questionCount.innerHTML=`Current Question:${questionIndex+1}/${questionData.length}`;
        options.innerHTML="";
        currentQuestion.options.forEach(function(option){
            options.innerHTML+=`
            <button class="option" onclick="checkAnswer('${option}','${currentQuestion.answer}')">${option}</button>`
        });
    } else{
        console.log("END")
        showScore();
    }
}
// render()

function nextQuestion(){
    progressValue++;
    questionIndex++;
    renderQuestion();

}
function checkAnswer(userAnswer, correctAnswer){
    if(userAnswer === correctAnswer){
        score++;
    }
    nextQuestion();
}

function showScore(){
    progress1.style.display = 'none';
    question.innerHTML="Quiz Completed";
    options.innerHTML=`Your score is :${score}/${questionData.length}`;
    percent.innerHTML=`${(score/questionData.length) * 100}%`;
}

window.onload = function(){
    renderQuestion();
}