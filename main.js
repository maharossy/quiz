const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];

// Find elements
const headerContainer = document.querySelector('#header'),
	  listContainer = document.querySelector('#list'),
	  submitBtn = document.querySelector('#submit');
	  

// Game variables
let questionindex = 0,
	score = 0;


clearPage();
showQuestion();
// showResults();

// Clear html page
function clearPage() {
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}	

function showQuestion() {
	// Question
	const headerTemplate = `
		<h2 class="title">%title%</h2>
	`
	const title = headerTemplate.replace('%title%', questions[questionindex]['question']);
	headerContainer.innerHTML = title;

	// Answer options
	let answerNumber = 1;
	for (answerText of questions[questionindex]['answers']) {
		const questionTemplate = `
			<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>
		`;

		const answerHTML = questionTemplate.replace('%answer%', answerText)
										   .replace('%number%', answerNumber);

		listContainer.innerHTML += answerHTML;
		answerNumber++;
	}

	function checkAnswer() {

		// find the selected radio btn
		const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

	}

	submitBtn.addEventListener('click', () => {
		checkAnswer();

		function checkAnswer() {
			// find the selected radio btn
			const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

			// If the answer is not selected - do nothing, exit the function
			if (!checkedRadio) {
				submitBtn.blur();
				return;	
			}

			// Number answer user
			const userAnswer = parseInt(checkedRadio.value);

			// If the answer is correct, we increase the score
			const correctAnswer = questions[questionindex]['correct'];

			if (userAnswer === correctAnswer) {
				score++;
			}

			if (questionindex !== questions.length - 1) {
				console.log('not finish');
				questionindex++;
				clearPage();
				showQuestion();
				return;
			} else {
				clearPage();
				showResults();
			}
		}
	});

	function showResults() {
		// Result quiz
		const resultTemplate = `
			<h2 class="title">%title%</h2>
			<h3 class="summary">%message%</h3>
			<p class="result">%result%</p>
		`;

		let title, message;

		// Heading and text options
		if (score === questions.length) {
			title = 'Поздравляем!';
			message = 'Вы ответили на все вопросы!'
		} else if ((score * 100) / questions.length >= 50) {
			title = 'плохой результат!';
			message = 'Вы дали более половины правильных ответов!';
		} else {
			title = 'Стоит постараться';
			message = 'Пока у вас меньше половины правильных ответов';
		}

		// Result
		let result = `${score} из ${questions.length}`;

		// The final answer is we substitute the data in the template
		const finalMessage = resultTemplate
							.replace('%title%', title)
							.replace('%message%', message)
							.replace('%result%', result)

		headerContainer.innerHTML = finalMessage;	

		// Change the button to "Start over"
		submitBtn.blur();
		submitBtn.innerText = 'Начать заново';
		submitBtn.onclick = () => history.go();
	}

	
	
}