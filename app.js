var timerCount = 75
function time() { 
var timerEl = document.querySelector("#timercount")
var startEl = document.querySelector("#start")
/*timerCount--;*/
console.log(timerCount)
/*timerEl.textContent = timerCount*/

var timer = window.setInterval(function () {
  timerCount--;
  timerEl.textContent = timerCount

  if (timerCount === 0) {
    clearInterval(timer)
  }
}, 1000)
}
start.addEventListener("click", function() {
  time();
})

var questions = [
  {
    q: "Web API supports which of the following protocol?",
    choices: ["TCP", "HTTP", "Soap"],
    a: "B"
  },
  {
    q: "What is a correct syntax to output Hello World in Java?",
    choices: ["System.out.printIn(Hello World);", "print(Hello World);", "Console.WriteLine(Hello World);"],
    a: "A"
  },
  {
    q: "How do you insert COMMENTS in Java code?",
    choices: ["/* This is a comment", "// This is a comment", "# This is a comment"],
    a: "B"
  },
  {
    q: "Which data type is used to create a variable that should store text?",
    choices: ["myString", "string", "String"],
    a: "C"
  },
  {
    q: "How do you create a variable with the numeric value 5?",
    choices: ["x = 5", "num x = 5", "int x = 5"],
    a: "C"
  },

]


var questionsPointer = 0

var question = document.querySelector("#question")
var optionA = document.querySelector("#optionA")
var optionB = document.querySelector("#optionB")
var optionC = document.querySelector("#optionC")


function setQuestions() {

  if (questionsPointer === questions.length) {
    clearInterval(timer)
    alert("You are done with " + timerCount + " time left")
    return
  }

  question.textContent = questions[questionsPointer].q
  optionA.textContent = questions[questionsPointer].choices[0]
  optionB.textContent = questions[questionsPointer].choices[1]
  optionC.textContent = questions[questionsPointer].choices[2]
}



setQuestions()

optionA.addEventListener("click", function () {
  if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("This is correct")
    questionsPointer++
    setQuestions()
  } else {
    console.log("wrong")
    timerCount -= 10
  }
})

optionB.addEventListener("click", function () {
  if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("This is correct")
    questionsPointer++
    setQuestions()
  } else {
    console.log("wrong")
    timerCount -= 10
  }
})

optionC.addEventListener("click", function () {
  if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("This is correct")
    questionsPointer++
    setQuestions()
  } else {
    console.log("wrong")
    timerCount -= 10
  }
})