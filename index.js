const QUIZZES = {
      english: {
        name: "English",
        icon: "📖",
        questions: [
          {
            q: "Which word is a synonym of 'benevolent'?",
            options: ["Hostile", "Kind", "Arrogant", "Lazy"],
            answer: 1
          },
          {
            q: "Choose the correctly spelled word:",
            options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
            answer: 2
          },
          {
            q: "Identify the figure of speech: 'The classroom was a zoo.'",
            options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
            answer: 1
          },
          {
            q: "Which sentence is in the passive voice?",
            options: [
              "She wrote a letter.",
              "A letter was written by her.",
              "She is writing a letter.",
              "She will write a letter."
            ],
            answer: 1
          },
          {
            q: "What is the past participle of 'go'?",
            options: ["Went", "Gone", "Going", "Goes"],
            answer: 1
          },
          {
            q: "Choose the correct article: '___ honest man always tells the truth.'",
            options: ["A", "An", "The", "No article"],
            answer: 1
          },
          {
            q: "Which is an example of alliteration?",
            options: [
              "She sells seashells by the seashore.",
              "The moon is a silver coin.",
              "Time flies like an arrow.",
              "He is as brave as a lion."
            ],
            answer: 0
          },
          {
            q: "What does the idiom 'break the ice' mean?",
            options: [
              "To destroy something",
              "To start a conversation",
              "To freeze water",
              "To end a relationship"
            ],
            answer: 1
          }
        ]
      },
      math: {
        name: "Mathematics",
        icon: "∑",
        questions: [
          {
            q: "What is the value of 7² − 3²?",
            options: ["40", "46", "16", "52"],
            answer: 0
          },
          {
            q: "Solve for x: 3x + 12 = 27",
            options: ["3", "5", "7", "9"],
            answer: 1
          },
          {
            q: "What is the area of a circle with radius 7? (Use π ≈ 22/7)",
            options: ["154", "44", "88", "22"],
            answer: 0
          },
          {
            q: "If a triangle has angles 40°, 60°, and x°, what is x?",
            options: ["70", "80", "90", "100"],
            answer: 1
          },
          {
            q: "What is 25% of 240?",
            options: ["40", "50", "60", "80"],
            answer: 2
          },
          {
            q: "Simplify: (2³ × 2⁴) ÷ 2⁵",
            options: ["2", "4", "8", "16"],
            answer: 1
          },
          {
            q: "The square root of 144 is:",
            options: ["10", "11", "12", "14"],
            answer: 2
          },
          {
            q: "If the ratio of a:b = 3:5 and a + b = 40, what is a?",
            options: ["12", "15", "18", "20"],
            answer: 1
          }
        ]
      },
      physics: {
        name: "Physics",
        icon: "⚛️",
        questions: [
          {
            q: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            answer: 1
          },
          {
            q: "Speed of light in vacuum is approximately:",
            options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
            answer: 1
          },
          {
            q: "Which law states that every action has an equal and opposite reaction?",
            options: [
              "Newton's First Law",
              "Newton's Second Law",
              "Newton's Third Law",
              "Law of Gravitation"
            ],
            answer: 2
          },
          {
            q: "What is the formula for kinetic energy?",
            options: ["mgh", "½mv²", "Fd", "P = IV"],
            answer: 1
          },
          {
            q: "Sound cannot travel through:",
            options: ["Solid", "Liquid", "Gas", "Vacuum"],
            answer: 3
          },
          {
            q: "Which color of light has the highest frequency?",
            options: ["Red", "Green", "Blue", "Violet"],
            answer: 3
          },
          {
            q: "The acceleration due to gravity on Earth is approximately:",
            options: ["9.8 m/s²", "6.7 m/s²", "3.0 m/s²", "12 m/s²"],
            answer: 0
          },
          {
            q: "What type of mirror is used in car headlights?",
            options: ["Plane", "Concave", "Convex", "Cylindrical"],
            answer: 1
          }
        ]
      },
      chemistry: {
        name: "Chemistry",
        icon: "🧪",
        questions: [
          {
            q: "What is the chemical symbol for Gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            answer: 2
          },
          {
            q: "The atomic number of Carbon is:",
            options: ["4", "6", "8", "12"],
            answer: 1
          },
          {
            q: "What is the pH of a neutral solution?",
            options: ["0", "7", "14", "1"],
            answer: 1
          },
          {
            q: "Which gas is produced when acids react with metals?",
            options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
            answer: 2
          },
          {
            q: "The most abundant element in the Earth's crust is:",
            options: ["Iron", "Silicon", "Oxygen", "Aluminum"],
            answer: 2
          },
          {
            q: "What is H₂O commonly known as?",
            options: ["Hydrogen peroxide", "Water", "Ozone", "Hydrochloric acid"],
            answer: 1
          },
          {
            q: "Which of these is a noble gas?",
            options: ["Nitrogen", "Oxygen", "Neon", "Chlorine"],
            answer: 2
          },
          {
            q: "The process of converting a solid directly into a gas is called:",
            options: ["Evaporation", "Condensation", "Sublimation", "Melting"],
            answer: 2
          }
        ]
      },
      computer: {
        name: "Computer",
        icon: "💻",
        questions: [
          {
            q: "What does CPU stand for?",
            options: [
              "Central Processing Unit",
              "Computer Personal Unit",
              "Central Program Utility",
              "Control Processing Unit"
            ],
            answer: 0
          },
          {
            q: "Which of these is a programming language?",
            options: ["HTTP", "HTML", "Python", "CSS"],
            answer: 2
          },
          {
            q: "What does RAM stand for?",
            options: [
              "Read Access Memory",
              "Random Access Memory",
              "Run Access Memory",
              "Remote Access Module"
            ],
            answer: 1
          },
          {
            q: "Which binary number equals decimal 5?",
            options: ["101", "110", "111", "100"],
            answer: 0
          },
          {
            q: "What is the full form of HTML?",
            options: [
              "Hyper Text Markup Language",
              "High Tech Modern Language",
              "Hyper Transfer Markup Language",
              "Home Tool Markup Language"
            ],
            answer: 0
          },
          {
            q: "Which data structure uses FIFO (First In First Out)?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            answer: 1
          },
          {
            q: "What does 'www' stand for in a website address?",
            options: [
              "World Wide Web",
              "Web World Wide",
              "Wide World Web",
              "World Web Wide"
            ],
            answer: 0
          },
          {
            q: "Which of these is an operating system?",
            options: ["Oracle", "Linux", "MySQL", "MongoDB"],
            answer: 1
          }
        ]
      }
    };

    // State
    let currentSubject = null;
    let questions = [];
    let currentIndex = 0;
    let selectedAnswer = null;
    let answers = [];
    let timerInterval = null;
    let timeLeft = 60;
    let totalTimeSpent = 0;
    let quizStartTime = 0;

    // DOM
    const screens = {
      home: document.getElementById('home'),
      quiz: document.getElementById('quiz'),
      results: document.getElementById('results')
    };

    function showScreen(name) {
      Object.values(screens).forEach(s => s.classList.remove('active'));
      screens[name].classList.add('active');
    }

    // Home: subject click
    document.querySelectorAll('.subject-card').forEach(card => {
      card.addEventListener('click', () => {
        const subject = card.dataset.subject;
        startQuiz(subject);
      });
    });

    function startQuiz(subjectKey) {
      currentSubject = QUIZZES[subjectKey];
      questions = [...currentSubject.questions];
      // shuffle
      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
      }
      currentIndex = 0;
      answers = [];
      selectedAnswer = null;
      totalTimeSpent = 0;
      quizStartTime = Date.now();

      document.getElementById('quiz-icon').textContent = currentSubject.icon;
      document.getElementById('quiz-subject').textContent = currentSubject.name;
      document.getElementById('q-total').textContent = questions.length;

      showScreen('quiz');
      loadQuestion();
    }

    function loadQuestion() {
      selectedAnswer = null;
      const q = questions[currentIndex];
      document.getElementById('q-current').textContent = currentIndex + 1;
      document.getElementById('q-label').textContent = `Question ${currentIndex + 1}`;
      document.getElementById('question-text').textContent = q.q;
      document.getElementById('progress-fill').style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

      const optionsEl = document.getElementById('options');
      optionsEl.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
        btn.addEventListener('click', () => selectOption(i, btn));
        optionsEl.appendChild(btn);
      });

      document.getElementById('btn-next').disabled = true;
      document.getElementById('btn-next').textContent = currentIndex === questions.length - 1 ? 'Finish →' : 'Next →';

      // Timer
      clearInterval(timerInterval);
      timeLeft = 45;
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        timeLeft--;
        totalTimeSpent++;
        updateTimerDisplay();
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          answers.push({ selected: null, correct: q.answer });
          nextQuestion();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const el = document.getElementById('timer');
      document.getElementById('timer-value').textContent = timeLeft;
      el.classList.remove('warning', 'danger');
      if (timeLeft <= 10) el.classList.add('danger');
      else if (timeLeft <= 20) el.classList.add('warning');
    }

    function selectOption(index, btn) {
      if (selectedAnswer !== null) return;
      selectedAnswer = index;
      document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById('btn-next').disabled = false;
    }

    document.getElementById('btn-next').addEventListener('click', () => {
      if (selectedAnswer === null) return;
      const q = questions[currentIndex];
      answers.push({ selected: selectedAnswer, correct: q.answer });

      // show feedback briefly
      const optionBtns = document.querySelectorAll('.option');
      optionBtns.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer) btn.classList.add('correct');
        else if (i === selectedAnswer) btn.classList.add('wrong');
      });

      clearInterval(timerInterval);
      setTimeout(() => nextQuestion(), 700);
    });

    function nextQuestion() {
      currentIndex++;
      if (currentIndex >= questions.length) {
        showResults();
      } else {
        loadQuestion();
      }
    }

    document.getElementById('btn-quit').addEventListener('click', () => {
      clearInterval(timerInterval);
      if (confirm('Quit this quiz? Your progress will be lost.')) {
        showScreen('home');
      }
    });

    function showResults() {
      clearInterval(timerInterval);
      const correctCount = answers.filter(a => a.selected === a.correct).length;
      const wrongCount = answers.length - correctCount;
      const percent = Math.round((correctCount / questions.length) * 100);
      const totalSeconds = Math.round((Date.now() - quizStartTime) / 1000);

      document.getElementById('score-percent').textContent = percent + '%';
      document.getElementById('score-circle').style.setProperty('--score-deg', `${percent * 3.6}deg`);
      document.getElementById('stat-correct').textContent = correctCount;
      document.getElementById('stat-wrong').textContent = wrongCount;
      document.getElementById('stat-time').textContent = totalSeconds + 's';
      document.getElementById('results-sub').textContent = `You scored ${correctCount} out of ${questions.length}`;

      let title = 'Keep practicing!';
      if (percent >= 90) title = 'Outstanding! 🏆';
      else if (percent >= 70) title = 'Great job! 🎉';
      else if (percent >= 50) title = 'Good effort! 💪';
      document.getElementById('results-title').textContent = title;

      // Review
      const reviewList = document.getElementById('review-list');
      reviewList.innerHTML = '';
      questions.forEach((q, i) => {
        const a = answers[i];
        const isCorrect = a.selected === a.correct;
        const div = document.createElement('div');
        div.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
        const yourAns = a.selected !== null ? q.options[a.selected] : 'No answer (time up)';
        div.innerHTML = `
          <div class="review-q">${i + 1}. ${q.q}</div>
          <div class="review-a">Your answer: <span>${yourAns}</span></div>
          ${!isCorrect ? `<div class="review-a">Correct: <span>${q.options[a.correct]}</span></div>` : ''}
        `;
        reviewList.appendChild(div);
      });

      document.getElementById('review-section').style.display = 'none';
      showScreen('results');
    }

    document.getElementById('btn-review').addEventListener('click', () => {
      const sec = document.getElementById('review-section');
      sec.style.display = sec.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('btn-retry').addEventListener('click', () => {
      startQuiz(Object.keys(QUIZZES).find(k => QUIZZES[k].name === currentSubject.name));
    });

    document.getElementById('btn-home').addEventListener('click', () => {
      showScreen('home');
    });