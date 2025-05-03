let currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;
let score = parseInt(localStorage.getItem("score")) || 0;
let userName = localStorage.getItem("userName") || "";
let answers = JSON.parse(localStorage.getItem("answers") || "[]");

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.getElementById('alert-sound').play();
  }
});

function startQuiz() {
  userName = document.getElementById("username").value.trim();
  if (!userName) {
    alert("Введите имя");
    return;
  }

  localStorage.setItem("userName", userName);
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  document.getElementById("question-box").innerText = q.question;

  const optionsBox = document.getElementById("options-box");
  optionsBox.innerHTML = "";

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.innerText = opt;
    div.classList.add("option");
    div.onclick = () => selectOption(i, div);
    optionsBox.appendChild(div);
  });
}

function selectOption(selectedIndex, element) {
  const q = questions[currentQuestion];
  const all = document.querySelectorAll(".option");
  all.forEach(opt => opt.onclick = null);

  answers[currentQuestion] = selectedIndex;
  localStorage.setItem("answers", JSON.stringify(answers));

  if (selectedIndex === q.correctIndex) {
    element.classList.add("correct");
    score++;
    localStorage.setItem("score", score);
  } else {
    element.classList.add("wrong");
    all[q.correctIndex].classList.add("correct");
  }
}

function nextQuestion() {
  currentQuestion++;
  localStorage.setItem("currentQuestion", currentQuestion);
  loadQuestion();
}

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  sendToTelegram(userName, score, questions.length);
  localStorage.clear(); // сброс для нового прохождения
}

function sendToTelegram(name, score, total) {
  const message = `🧒 Имя ученика: ${name}
📊 Результат: ${score} из ${total}`;
  const token = "7816312633:AAHMXm543H66-kRBwcIkLzZdkXP85VX-p8E";
  const chatId = "-4787355244";

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message })
  });
}

window.addEventListener("load", () => {
  if (userName && currentQuestion < questions.length) {
    document.getElementById("username").value = userName;
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    loadQuestion();
  }
});
