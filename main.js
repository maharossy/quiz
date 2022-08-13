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

		console.log('start');
		// find the selected radio btn
		const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

		console.log(checkedRadio);
	}

	submitBtn.addEventListener('click', () => {
		function checkAnswer() {
			// find the selected radio btn
			const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

			// If the answer is not selected - do nothing, exit the function
			if (!checkedRadio) {
				submitBtn.blur();
				return;	
			}
		}

		

		checkAnswer();

	});
	
}