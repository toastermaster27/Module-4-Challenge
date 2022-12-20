let score = 0;
let finalScore = document.getElementById("finScore");
const question = document.getElementById("question");

const op1 = document.getElementById('opt1');
const op2 = document.getElementById('opt2');
const op3 = document.getElementById('opt3');
const op4 = document.getElementById('opt4');
let currentQuestion;

function startQuiz() {
    document.getElementById("popUpQuiz").style.display = "block";
	document.getElementById("start").style.display = "none";
	loadQuestion(0)
}



  //Questions to be asked
  const Questions = [{
	id: 0,
	q: "What symbol is used to create an array in JavaScript?",
	a: [{ text: "{}", isCorrect: false },
		{ text: "()", isCorrect: false },
		{ text: "[]", isCorrect: true },
		{ text: "<>", isCorrect: false }
	]

},
{
	id: 1,
	q: "Web API stand for",
	a: [{ text: "Web Application Portable Interface", isCorrect: false, isSelected: false },
		{ text: "Web Applicable Porgramming Item", isCorrect: false },
		{ text: "Web After Program Intern", isCorrect: false },
		{ text: "Web Application Programming Interface", isCorrect: true }
	]

},
{
	id: 2,
	q: "Which of the following are programming languages?",
	a: [{ text: "HTML", isCorrect: false },
		{ text: "CSS", isCorrect: false },
		{ text: "JavaScript", isCorrect: true },
		{ text: "jQuery", isCorrect: false }
	]

},
{
	id: 3,
	q: "What school is Coding Bootcamp through?",
	a: [{ text: "Western Michigan University", isCorrect: false },
		{ text: "Ivy Tech", isCorrect: false },
		{ text: "Michigan State University", isCorrect: true },
		{ text: "Harvard University", isCorrect: false }
	]

}

]

function loadQuestion(id) {
	if (id < Questions.length) {
		question.textContent=Questions[id].q
		op1.textContent=Questions[id].a[0].text
		op2.textContent=Questions[id].a[1].text
		op3.textContent=Questions[id].a[2].text
		op4.textContent=Questions[id].a[3].text
		currentQuestion=id
	} else {displayScore()}
}
function displayScore() {
	document.getElementById("endQuiz").style.display = "block";
	document.getElementById("popUpQuiz").style.display = "none";
	document.getElementById("startQuiz").style.display = "none";
	finalScore.textContent=score
}

function answerQuestion(cats) {
	if (Questions[currentQuestion].a[cats].isCorrect) {
		score = score+1
	} else {}
	loadQuestion(currentQuestion+1)

}