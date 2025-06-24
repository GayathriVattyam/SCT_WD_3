 const questions = [
      { q: "Which data structure uses FIFO?", o: ["Stack", "Queue", "Tree", "Graph"], a: 1 },
      { q: "What is JVM?", o: ["Java Very Machine", "Java Virtual Machine", "Just Virtual Machine", "None"], a: 1 },
      { q: "Which tag is used to create a hyperlink in HTML?", o: ["<p>", "<a>", "<link>", "<href>"], a: 1 },
      { q: "Which CSS property changes text color?", o: ["color", "font-size", "text-align", "background"], a: 0 },
      { q: "Which keyword is used to declare variables in JavaScript?", o: ["int", "let", "define", "consts"], a: 1 },
      { q: "Which memory is volatile?", o: ["ROM", "RAM", "SSD", "HDD"], a: 1 },
      { q: "What is the time complexity of binary search?", o: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], a: 1 },
      { q: "Which method is entry point of Java program?", o: ["start()", "main()", "run()", "init()"], a: 1 },
      { q: "Which tag defines a table row in HTML?", o: ["<td>", "<tr>", "<th>", "<table>"], a: 1 },
      { q: "Which selector selects all elements in CSS?", o: ["#", ".", "*", "%"], a: 2 },
      { q: "Which keyword adds an event in JS?", o: ["eventCall", "onEvent", "addEventListener", "callBack"], a: 2 },
      { q: "Which of the following is not an operating system?", o: ["Windows", "Linux", "Oracle", "macOS"], a: 2 },
      { q: "Which property changes the background color in CSS?", o: ["background-color", "bgcolor", "color", "bg"], a: 0 },
      { q: "Which method adds an element to the end of an array?", o: [".push()", ".pop()", ".shift()", ".concat()"], a: 0 },
      { q: "What does HTML stand for?", o: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown", "None"], a: 0 }
    ];

    function loadQuestions() {
      const container = document.getElementById('questionList');
      questions.forEach((q, idx) => {
        const block = document.createElement('div');
        block.classList.add('question-block');

        const question = document.createElement('p');
        question.innerHTML = `<strong>Q${idx + 1}:</strong> ${q.q}`;
        block.appendChild(question);

        q.o.forEach((opt, i) => {
          const label = document.createElement('label');
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = `q${idx}`;
          input.value = i;
          label.appendChild(input);
          label.appendChild(document.createTextNode(opt));
          block.appendChild(label);
        });

        container.appendChild(block);
      });
    }

    function submitQuiz() {
      let score = 0;
      questions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.a) {
          score++;
        }
      });

      document.getElementById('quizPage').style.display = 'none';
      document.getElementById('resultPage').style.display = 'flex';
      document.getElementById('scoreValue').innerText = `${score}/15`;

      let message = "";
      if (score >= 13) message = "🏆 Excellent! You're a tech wizard!";
      else if (score >= 10) message = "🌟 Great job! You're improving fast!";
      else if (score >= 7) message = "👍 Nice effort! Keep practicing!";
      else message = "💡 Don't worry, keep learning and you'll get there!";

      document.getElementById('motivationText').innerText = message;
    }

    function restartQuiz() {
      window.location.reload();
    }

    window.onload = loadQuestions;
  