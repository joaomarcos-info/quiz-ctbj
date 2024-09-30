// Quiz Data - 20 Perguntas
const quizData = [
    {
        question: "Qual modelo de desenvolvimento de software segue uma abordagem linear e sequencial?",
        options: {
            A: "Modelo Incremental",
            B: "Modelo Cascata",
            C: "Scrum",
            D: "Modelo Espiral"
        },
        correct: "B"
    },
    {
        question: "Qual é uma das principais desvantagens do modelo cascata?",
        options: {
            A: "Requer muito feedback contínuo do cliente",
            B: "É inflexível para mudanças no meio do projeto",
            C: "O custo é muito alto",
            D: "A entrega de incrementos é muito lenta"
        },
        correct: "B"
    },
    {
        question: "No modelo incremental, como o feedback do cliente influencia o desenvolvimento?",
        options: {
            A: "O feedback é coletado apenas no final do projeto",
            B: "O feedback é usado para ajustar os incrementos seguintes",
            C: "O feedback só é considerado durante a fase de manutenção",
            D: "O feedback não é usado, pois o modelo é fixo"
        },
        correct: "B"
    },
    {
        question: "Qual modelo de desenvolvimento é mais adequado para projetos de software complexos que envolvem muitos riscos?",
        options: {
            A: "Modelo Cascata",
            B: "Scrum",
            C: "Modelo Espiral",
            D: "Kanban"
        },
        correct: "C"
    },
    {
        question: "Qual modelo combina prototipagem e análise de riscos em cada ciclo?",
        options: {
            A: "Modelo Incremental",
            B: "Scrum",
            C: "Modelo Espiral",
            D: "XP"
        },
        correct: "C"
    },
    {
        question: "Qual metodologia é baseada em sprints curtas e entregas rápidas?",
        options: {
            A: "Scrum",
            B: "Modelo Cascata",
            C: "Kanban",
            D: "Modelo Incremental"
        },
        correct: "A"
    },
    {
        question: "Qual modelo é conhecido por ser flexível e adequado para mudanças frequentes de requisitos?",
        options: {
            A: "Modelo Cascata",
            B: "Scrum",
            C: "Modelo Incremental",
            D: "XP"
        },
        correct: "B"
    },
    {
        question: "Qual prática de desenvolvimento envolve dois programadores trabalhando juntos no mesmo código?",
        options: {
            A: "Scrum",
            B: "Kanban",
            C: "Programação em Par (XP)",
            D: "Modelo Espiral"
        },
        correct: "C"
    },
    {
        question: "No Scrum, quem é responsável por representar os interesses dos stakeholders?",
        options: {
            A: "Scrum Master",
            B: "Product Owner",
            C: "Equipe de Desenvolvimento",
            D: "Cliente"
        },
        correct: "B"
    },
    {
        question: "Qual modelo é mais indicado para sistemas críticos, como no setor de aviação ou militar?",
        options: {
            A: "Modelo Espiral",
            B: "Scrum",
            C: "XP",
            D: "Modelo Incremental"
        },
        correct: "A"
    },
    {
        question: "Qual é uma vantagem do Kanban?",
        options: {
            A: "Uso de sprints curtas",
            B: "Flexibilidade no fluxo de trabalho",
            C: "Feedback constante do cliente",
            D: "Alta documentação"
        },
        correct: "B"
    },
    {
        question: "No XP (Extreme Programming), o que significa refatoração?",
        options: {
            A: "Escrever código para novas funcionalidades",
            B: "Melhorar o código existente sem alterar seu comportamento",
            C: "Testar o software antes da entrega",
            D: "Planejar a arquitetura do software"
        },
        correct: "B"
    },
    {
        question: "Qual é a principal diferença entre o Scrum e o Modelo Cascata?",
        options: {
            A: "O Scrum é linear e o Modelo Cascata é iterativo",
            B: "O Scrum foca em sprints, enquanto o Modelo Cascata é sequencial",
            C: "O Scrum não envolve feedback, enquanto o Modelo Cascata sim",
            D: "O Modelo Cascata tem entregas incrementais"
        },
        correct: "B"
    },
    {
        question: "No Scrum, o que é o 'Daily Scrum'?",
        options: {
            A: "Uma reunião diária para revisar o progresso da sprint",
            B: "Uma entrega de funcionalidade ao cliente",
            C: "O planejamento da sprint",
            D: "O encerramento da sprint"
        },
        correct: "A"
    },
    {
        question: "Qual é uma desvantagem do modelo cascata?",
        options: {
            A: "Entregas contínuas",
            B: "Falta de documentação",
            C: "Dificuldade em lidar com mudanças",
            D: "Rápido desenvolvimento"
        },
        correct: "C"
    },
    {
        question: "No XP, qual é o objetivo da programação em par?",
        options: {
            A: "Aumentar a velocidade de desenvolvimento",
            B: "Facilitar a revisão de código em tempo real",
            C: "Evitar a documentação",
            D: "Entregar o produto final mais rápido"
        },
        correct: "B"
    },
    {
        question: "Qual modelo de desenvolvimento segue uma abordagem linear sem feedback contínuo?",
        options: {
            A: "Modelo Incremental",
            B: "Modelo Cascata",
            C: "Scrum",
            D: "Modelo Espiral"
        },
        correct: "B"
    },
    {
        question: "Qual prática ágil utiliza um quadro visual para limitar o trabalho em progresso?",
        options: {
            A: "Scrum",
            B: "Kanban",
            C: "XP",
            D: "Modelo Incremental"
        },
        correct: "B"
    },
    {
        question: "Qual modelo é recomendado para projetos com requisitos parcialmente definidos?",
        options: {
            A: "Modelo Cascata",
            B: "Modelo Incremental",
            C: "Scrum",
            D: "Kanban"
        },
        correct: "B"
    },
    {
        question: "Qual metodologia prioriza indivíduos e interações acima de processos e ferramentas?",
        options: {
            A: "Modelo Cascata",
            B: "Modelo Incremental",
            C: "Scrum",
            D: "XP"
        },
        correct: "C"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionAEl = document.getElementById('optionA');
const optionBEl = document.getElementById('optionB');
const optionCEl = document.getElementById('optionC');
const optionDEl = document.getElementById('optionD');
const feedbackEl = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

// Função para carregar pergunta
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    optionAEl.innerText = currentQuestion.options.A;
    optionBEl.innerText = currentQuestion.options.B;
    optionCEl.innerText = currentQuestion.options.C;
    optionDEl.innerText = currentQuestion.options.D;
    feedbackEl.innerText = '';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';

    // Limpa a seleção anterior
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectedOption.checked = false;
    }
}

// Verifica resposta
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestionIndex].correct) {
            feedbackEl.innerText = 'Correto!';
            feedbackEl.style.color = 'green';
            score++;
        } else {
            feedbackEl.innerText = `Errado! A resposta correta é: ${quizData[currentQuestionIndex].correct}`;
            feedbackEl.style.color = 'red';
        }
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    } else {
        feedbackEl.innerText = 'Por favor, selecione uma resposta.';
        feedbackEl.style.color = 'orange';
    }
}

// Avança para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

// Exibe a pontuação final
function showScore() {
    document.getElementById('question-container').style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreEl.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

// Reinicia o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    loadQuestion();
}

// Inicializa o quiz quando a página carregar
window.onload = function() {
    loadQuestion();
    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
};
