let currentQuestion = 0;
let score = 0;
let userName = "";

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
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
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

  if (selectedIndex === q.correctIndex) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
    all[q.correctIndex].classList.add("correct");
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  // const resultText = document.getElementById("result-text");
  // resultText.innerText = `${score} из ${questions.length}`;
  sendToTelegram(userName, score, questions.length);
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
