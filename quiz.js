const questions = [
  {
      question: "What does HTML stand for?",
      answers: [
          { text: "Hyper Text Markup Language", correct: true },
          { text: "Hyperlinks and Text Markup Language", correct: false },
          { text: "Home Tool Markup Language", correct: false },
          { text: "Hyperlinking Text Marking Language", correct: false }
      ]
  },
  {
      question: "What does CSS stand for?",
      answers: [
          { text: "Cascading Style Sheets", correct: true },
          { text: "Colorful Style Sheets", correct: false },
          { text: "Creative Style Sheets", correct: false },
          { text: "Computer Style Sheets", correct: false }
      ]
  },
  {
      question: "What is the programming language used for developing Android apps?",
      answers: [
          { text: "Java", correct: true },
          { text: "JavaScript", correct: false },
          { text: "Python", correct: false },
          { text: "C++", correct: false }
      ]
  },
  {
      question: "What is the main purpose of a database?",
      answers: [
          { text: "To store and organize data", correct: true },
          { text: "To display data on a web page", correct: false },
          { text: "To format data for printing", correct: false },
          { text: "To analyze data for trends", correct: false }
      ]
  },
  {
      question: "What is a variable?",
      answers: [
          { text: "A container for storing data values", correct: true },
          { text: "A function that performs a specific task", correct: false },
          { text: "An object that contains properties and methods", correct: false },
          { text: "A conditional statement that executes code based on a condition", correct: false }
      ]
  },
  {
      question: "What does API stand for?",
      answers: [
          { text: "Application Programming Interface", correct: true },
          { text: "Application Process Integration", correct: false },
          { text: "Application Programming Integration", correct: false },
          { text: "Application Process Interface", correct: false }
      ]
  },
  {
      question: "What is the purpose of a constructor in JavaScript?",
      answers: [
          { text: "To create and initialize an object", correct: true },
          { text: "To perform a mathematical calculation", correct: false },
          { text: "To execute a sequence of code", correct: false },
          { text: "To loop through an array of data", correct: false }
      ]
  },
  {
      question: "What is a function?",
      answers: [
          { text: "A reusable block of code that performs a specific task", correct: true },
          { text: "A variable that contains multiple values", correct: false },
          { text: "An object that contains properties and methods", correct: false },
          { text: "A conditional statement that executes code based on a condition", correct: false }
      ]
  },
  {
      question: "What is a loop?",
      answers: [
          { text: "A way to execute the same block of code multiple times", correct: true },
          { text: "A way to store and retrieve data", correct: false },
          { text: "A way to perform a calculation", correct: false },
          { text: "A way to sort data into a specific order",correct:false}
      ]
    },
    {
        question: "OS computer abbreviation usually means?",
        answers: [
            { text: "Operating System", correct: true },
            { text: "Open Source", correct: false },
            { text: "Order of Significance", correct: false },
            { text: "Optical Sensor",correct:false}
        ]
    },
    {
        question: "Firewall in computer is used for ?",
        answers: [
            { text: "Security", correct: true },
            { text: "Data Transmission", correct: false },
            { text: "Authentication", correct: false },
            { text: "Monitoring",correct:false}
        ]
    },
  ];


const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-btn");

function showQuestions() {
  questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionTitle = document.createElement("h2");
      questionTitle.textContent = `${index + 1}. ${question.question}`;
      questionDiv.appendChild(questionTitle);

      const answersDiv = document.createElement("div");
      answersDiv.classList.add("answers");
      questionDiv.appendChild(answersDiv);

      question.answers.forEach((answer) => {
          const answerLabel = document.createElement("label");
          answerLabel.textContent = answer.text;

          const answerInput = document.createElement("input");
          answerInput.type = "radio";
          answerInput.name = `question-${index}`;
          answerInput.value = answer.text;

          answerLabel.appendChild(answerInput);
          answersDiv.appendChild(answerLabel);
      });

      quizContainer.appendChild(questionDiv);
  });
}

function calculateScore() {
  let score = 0;
  questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === question.answers.find(a => a.correct).text) {
          score++;
      }
  });
  return score;
}

submitButton.addEventListener("click", () => {
  const score = calculateScore();
  alert(`You got ${score} out of ${questions.length} questions correct!`);
  window.location.href='quiz_password.html';
});

showQuestions();
