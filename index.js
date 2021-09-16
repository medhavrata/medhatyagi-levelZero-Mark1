var readlineSync = require('readline-sync')

// creating an object for questions

var questionOne = {
  question: "Who is my favorite superhero ",
  answer: "Superman",

}

var questionTwo = {
  question: "Which one is your favorite song ",
  answer: "Honey Singh",

}

var count = 0

function checkAnswer(question, answer){
  var ans = readlineSync.question(question)
  if (ans === answer){
    count++
    console.log('you are right')
    console.log('your current score is: ', count)
  }else{
    console.log('you are wrong')
    console.log('your current score is: ', count)
  }
}

var questions = [questionOne, questionTwo]

for (var i = 0; i < questions.length; i++){
  checkAnswer(questions[i].question, questions[i].answer)
}