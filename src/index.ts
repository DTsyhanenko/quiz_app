type Quiz = [
    {
        question: string,
        a: string,
        b: string,
        c: string,
        d: string,
        correct: string,
    },
    {
        question: string,
        a: string,
        b: string,
        c: string,
        d: string,
        correct: string,
    },
    {
        question: string,
        a: string,
        b: string,
        c: string,
        d: string,
        correct: string,
    },
    {
        question: string,
        a: string,
        b: string,
        c: string,
        d: string,
        correct: string,
    },
]

const quizData: Quiz = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was Javascript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
]

const quiz = document.getElementById('quiz') as HTMLDivElement
const answerEls = document.querySelectorAll<HTMLInputElement>('.answer')
const questionEl = document.getElementById('question') as HTMLHeadingElement
const a_text = document.getElementById('a_text') as HTMLLabelElement
const b_text = document.getElementById('b_text') as HTMLLabelElement
const c_text = document.getElementById('c_text') as HTMLLabelElement
const d_text = document.getElementById('d_text') as HTMLLabelElement
const submitBtn = document.getElementById('submit') as HTMLButtonElement

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2 style="text-align: center;">You answered correctly at ${score}/${quizData.length} questions</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})