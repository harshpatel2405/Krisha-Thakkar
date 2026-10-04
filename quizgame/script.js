let play = document.querySelector("#play");
let box = document.querySelector(".box");
let main = document.querySelector(".main");
let score = 0;
let index = 0;
let questions = [
  {
    que: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    correctChoice: "var",
  },
  {
    que: "Which symbol is used for a single-line comment in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    correctChoice: "//",
  },
  {
    que: "Which method is used to print something in the browser console?",
    options: ["console.log()", "print()", "display()", "write()"],
    correctChoice: "console.log()",
  },
  {
    que: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Character"],
    correctChoice: "Character",
  },
  {
    que: "Which operator is used to compare both value and type?",
    options: ["==", "=", "===", "!="],
    correctChoice: "===",
  },
];


/*
let questions = [];

fetch("questions.json")
    .then(response => response.json())
    .then(data => {
        questions = data;
        console.log(questions);
    });
*/
let sc = document.querySelector("#sc");
play.addEventListener("click", function () {
  showQuestion();
});

/*
play.onclick = showQuestion;
*/

function showQuestion() {
  box.innerHTML = "";
  let question = document.createElement("h2");
  question.innerText = questions[index].que;
  const choices = questions[index].options;
  let correctChoice = questions[index].correctChoice;
  box.append(question);

  for (let i = 0; i < choices.length; i++) {
    let option = document.createElement("input");
    let label = document.createElement("label");
    label.innerText = choices[i];
    option.setAttribute("type", "radio");
    option.setAttribute("name", "answer");
    option.setAttribute("class", "opt");
    option.setAttribute("value", choices[i]);
    box.append(option, label);
  }

  // let submitbtn = document.getElementById('submitbtn')
  // submitbtn.remove()
  let WorkButton = document.createElement("button");
  WorkButton.type = "button";
  WorkButton.setAttribute("id", "submitbtn");
  WorkButton.addEventListener("click", function () {
    let opt = document.querySelectorAll(".opt");
    for (let i in opt) {
      if (opt[i].checked) {
        let heading = document.createElement("h2");
        if (opt[i].value === correctChoice) score++;
        break;
      }
    }
  });

  if (index != 4) {
    WorkButton.innerHTML = "next";

    box.append(WorkButton);
    WorkButton.addEventListener("click", function () {
      index++;
      showQuestion();
    });
  } else {
    let heading = document.createElement("h2");
    WorkButton.innerHTML = "Submit";
    box.append(WorkButton);
    WorkButton.addEventListener("click", function () {
      box.innerHTML = "";
      heading.innerHTML = "Score : " + score;
      box.append(heading);
    });
  }
  sc.innerHTML = "SCORE : " + score;
}
