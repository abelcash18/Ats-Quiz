const questionsDB = {
  english: [
    { q: "Choose the correct synonym for 'Ephemeral'.", options: ["Eternal", "Transient", "Substantial", "Permanent"], correct: 1 },
    { q: "Which word is an adjective?", options: ["Quickly", "Run", "Beautiful", "Happiness"], correct: 2 }
  ],
  math: [
    { q: "What is the value of x if 2x + 6 = 14?", options: ["2", "3", "4", "5"], correct: 2 },
    { q: "What is the square root of 144?", options: ["10", "11", "12", "14"], correct: 2 }
  ],
  physics: [
    { q: "What unit is used to measure force?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 2 }
  ],
  chemistry: [
    { q: "What is the chemical symbol for Gold?", options: ["Ag", "Au", "Fe", "Pb"], correct: 1 }
  ],
  computer: [
    { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyperlink Text Management Language", "Home Tool Markup Language"], correct: 0 }
  ]
};

let currentSubject = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
let timeTaken = 0;

// UI Elements
const screens = {
  home: document.getElementById('home'),
  quiz: document.getElementById('quiz'),
  results: document.getElementById('results')
};

function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

function decodeHtmlEntities(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

// Event Listeners for Subject Selection
document.querySelectorAll('.subject-card').forEach(card => {
  card.addEventListener('click', () => {
    const subject = card.dataset.subject;
    startQuiz(subject);
  });
});

async function startQuiz(subject) {
  currentSubject = subject;
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  timeTaken = 0;

  const fallbackQuestions = questionsDB[subject] || questionsDB.computer || [];
  currentQuestions = fallbackQuestions;

  document.getElementById('quiz-subject').innerText = subject.toUpperCase();
  document.getElementById('q-total').innerText = currentQuestions.length;
  document.getElementById('q-current').innerText = 1;
  document.getElementById('q-label').innerText = 'Loading question...';
  document.getElementById('question-text').innerText = 'Loading question...';
  document.getElementById('options').innerHTML = '';
  document.getElementById('btn-next').disabled = true;

  showScreen('quiz');
  startTimer();
  loadQuestion();

  try {
    const categoryIds = { computer: 18, math: 19, physics: 17, chemistry: 17 };
    const catId = categoryIds[subject] || 18;
    const url = `https://opentdb.com/api.php?amount=10&category=${catId}&type=multiple`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    if (!data || !Array.isArray(data.results) || data.results.length === 0) {
      throw new Error('No questions were returned by the API');
    }

    currentQuestions = data.results.map(item => {
      const options = item.incorrect_answers.map(answer => decodeHtmlEntities(answer));
      const correctIdx = Math.floor(Math.random() * 4);
      const correctAnswer = decodeHtmlEntities(item.correct_answer);
      options.splice(correctIdx, 0, correctAnswer);

      return {
        q: decodeHtmlEntities(item.question),
        options,
        correct: correctIdx
      };
    });
  } catch (error) {
    console.warn('Using local quiz questions instead:', error);
    currentQuestions = fallbackQuestions;
  }

  document.getElementById('q-total').innerText = currentQuestions.length;
  loadQuestion();
}

function loadQuestion() {
  const qData = currentQuestions[currentQuestionIndex];
  if (!qData) {
    document.getElementById('q-current').innerText = 0;
    document.getElementById('q-label').innerText = 'No questions';
    document.getElementById('question-text').innerText = 'No questions available right now.';
    document.getElementById('options').innerHTML = '';
    document.getElementById('btn-next').disabled = true;
    return;
  }

  document.getElementById('q-current').innerText = currentQuestionIndex + 1;
  document.getElementById('q-label').innerText = `Question ${currentQuestionIndex + 1}`;
  document.getElementById('question-text').innerText = qData.q;

  const progressPct = currentQuestions.length ? ((currentQuestionIndex + 1) / currentQuestions.length) * 100 : 0;
  document.getElementById('progress-fill').style.width = `${progressPct}%`;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  document.getElementById('btn-next').disabled = true;

  qData.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.onclick = () => selectOption(index);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(index) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.classList.remove('selected'));
  
  buttons[index].classList.add('selected');
  userAnswers[currentQuestionIndex] = index;
  document.getElementById('btn-next').disabled = false;
}

document.getElementById('btn-next').addEventListener('click', () => {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  if (!currentQuestion) {
    finishQuiz();
    return;
  }

  const selected = userAnswers[currentQuestionIndex];
  if (selected === currentQuestion.correct) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
});

function startTimer() {
  let timeRemaining = 60;
  document.getElementById('timer-value').innerText = timeRemaining;
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeRemaining--;
    timeTaken++;
    document.getElementById('timer-value').innerText = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function finishQuiz() {
  clearInterval(timerInterval);
  showScreen('results');

  const percentage = Math.round((score / currentQuestions.length) * 100) || 0;
  document.getElementById('score-percent').innerText = `${percentage}%`;
  document.getElementById('score-circle').style.setProperty('--score-deg', `${(percentage / 100) * 360}deg`);
  
  document.getElementById('results-sub').innerText = `You scored ${score} out of ${currentQuestions.length}`;
  document.getElementById('stat-correct').innerText = score;
  document.getElementById('stat-wrong').innerText = currentQuestions.length - score;
  document.getElementById('stat-time').innerText = `${timeTaken}s`;
}

document.getElementById('btn-quit').addEventListener('click', () => showScreen('home'));
document.getElementById('btn-home').addEventListener('click', () => showScreen('home'));
document.getElementById('btn-retry').addEventListener('click', () => startQuiz(currentSubject));







