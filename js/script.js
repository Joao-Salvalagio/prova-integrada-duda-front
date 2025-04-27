const provas = {
    1: [
        {
            question: "Qual das alternativas descreve corretamente uma diferença entre DNA e RNA?",
            options: [
                "DNA possui uracila e fita dupla.",
                "RNA é formado por nucleotídeos com desoxirribose.",
                "DNA possui timina, RNA possui uracila.",
                "Ambos possuem as mesmas bases nitrogenadas."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "A replicação do DNA é chamada de semiconservativa porque:",
            options: [
                "Apenas uma das fitas é copiada.",
                "Apenas organismos eucariontes replicam o DNA assim.",
                "Cada nova molécula mantém uma fita original e forma outra nova.",
                "O processo não é confiável, pois não conserva a informação."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "Sobre a distrofia muscular de Duchenne, é correto afirmar:",
            options: [
                "Acomete mais mulheres do que homens.",
                "É causada por mutação em gene do cromossomo Y.",
                "Envolve mutação no gene da distrofina no cromossomo X.",
                "Tem início geralmente após os 15 anos."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "A eucromatina é caracterizada por:",
            options: [
                "Inatividade transcricional.",
                "Alta condensação.",
                "Atividade gênica.",
                "Ausência de histonas."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "Qual o nome da proteína alterada na Distrofia de Duchenne?",
            options: [
                "Actina.",
                "Distrofina.",
                "Miosina.",
                "Elastina."
            ],
            answer: 1 // Resposta correta
        },
        {
            question: "A fenilcetonúria afeta o metabolismo de:",
            options: [
                "Glicose.",
                "Fenilalanina.",
                "Galactose.",
                "Ácido úrico."
            ],
            answer: 1 // Resposta correta
        },
        {
            question: "A replicação do DNA ocorre em qual fase do ciclo celular?",
            options: [
                "G1.",
                "G2.",
                "S.",
                "M."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "A cromatina ativa é chamada de:",
            options: [
                "Eucromatina.",
                "Heterocromatina.",
                "Cromossomo.",
                "Nucleossomo."
            ],
            answer: 0 // Resposta correta
        },
        {
            question: "O gene causador da acondroplasia está localizado no:",
            options: [
                "Cromossomo 1.",
                "Cromossomo 4.",
                "Cromossomo X.",
                "Cromossomo 7."
            ],
            answer: 1 // Resposta correta
        },
        {
            question: "A síndrome de Hunter é uma:",
            options: [
                "Doença mitocondrial.",
                "Mucopolissacaridose.",
                "Doença dominância ligada ao Y.",
                "Trissomia."
            ],
            answer: 1 // Resposta correta
        }
    ],
    2: [
        {
            question: "A adição de uma cauda poli-A ocorre:",
            options: [
                "No início da replicação.",
                "No núcleo, após transcrição.",
                "Após tradução.",
                "No ribossomo."
            ],
            answer: 1 // Resposta correta
        },
        {
            question: "Qual o nome do experimento que confirmou a estrutura do DNA?",
            options: [
                "Avery.",
                "Griffith.",
                "Franklin.",
                "Watson e Crick."
            ],
            answer: 3 // Resposta correta
        },
        {
            question: "A hemofilia é uma doença:",
            options: [
                "Mitocondrial.",
                "Ligada ao X.",
                "Autossômica dominante.",
                "Poligênica."
            ],
            answer: 1 // Resposta correta
        },
        {
            question: "A proteína CFTR é defeituosa em:",
            options: [
                "Anemia falciforme.",
                "Fibrose cística.",
                "Galactosemia.",
                "Doença de Huntington."
            ],
            answer: 1 // Resposta correta
        },
        {
            question: "A duplicação do DNA ocorre graças à enzima:",
            options: [
                "RNA polimerase.",
                "DNA ligase.",
                "DNA polimerase.",
                "Topoisomerase."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "O códon de iniciação da tradução é:",
            options: [
                "UAA.",
                "AUG.",
                "UGA.",
                "UAG."
            ],
            answer: 1 // Resposta correta
        },
        {
            question: "A anemia falciforme é causada por:",
            options: [
                "Deficiência de distrofina.",
                "Mutação na cadeia alfa da hemoglobina.",
                "Substituição de um aminoácido na hemoglobina beta.",
                "Excesso de ácido úrico."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "A herança autossômica dominante é caracterizada por:",
            options: [
                "Pular gerações.",
                "Afectar apenas homens.",
                "Afectar ambos os sexos com presença em todas as gerações.",
                "Afectar apenas quando ambos os alelos estão mutados."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "A base nitrogenada presente no RNA e ausente no DNA é:",
            options: [
                "Timina.",
                "Citosina.",
                "Uracila.",
                "Guanina."
            ],
            answer: 2 // Resposta correta
        },
        {
            question: "A enzima que adiciona nucleotídeos durante a transcrição é:",
            options: [
                "DNA polimerase.",
                "RNA polimerase.",
                "Ligase.",
                "Topoisomerase."
            ],
            answer: 1 // Resposta correta
        }
    ]
};

let currentQuestionIndex = 0;
let currentProva = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showProva(provaNumber) {
    currentProva = provas[provaNumber];
    currentQuestionIndex = 0;
    displayQuestion();
}

function displayQuestion() {
    const provaContainer = document.getElementById('prova-container');
    provaContainer.innerHTML = ''; // Limpa o conteúdo anterior

    if (currentQuestionIndex < currentProva.length) {
        const item = currentProva[currentQuestionIndex];
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        // Cria um array de opções com o índice da resposta correta
        const optionsWithIndex = item.options.map((option, i) => ({ text: option, index: i }));
        
        // Embaralha as opções
        shuffleArray(optionsWithIndex);

        // Encontra a nova posição da resposta correta
        const correctOptionIndex = optionsWithIndex.findIndex(option => option.index === item.answer);

        questionDiv.innerHTML = `
            <p>${currentQuestionIndex + 1}. ${item.question}</p>
            <div class="options">
                ${optionsWithIndex.map((option, i) => `
                    <button onclick="checkAnswer(${i === correctOptionIndex})">${option.text}</button>
                `).join('')}
            </div>
            <div id="correct-answer" class="answer"></div>
            <button class="next-button" id="next-button" onclick="nextQuestion()" style="display: none;">Próxima Pergunta</button>
        `;
        provaContainer.appendChild(questionDiv);
    } else {
        provaContainer.innerHTML = "<p>Você completou a prova!</p>";
    }
}

function checkAnswer(isCorrect) {
    const answerDiv = document.getElementById('correct-answer');
    const correctAnswer = currentProva[currentQuestionIndex].options[currentProva[currentQuestionIndex].answer];
    
    if (isCorrect) {
        answerDiv.innerHTML = "Resposta correta!";
    } else {
        answerDiv.innerHTML = `Resposta incorreta! Resposta correta: ${correctAnswer}`;
    }
    answerDiv.style.display = 'block';

    // Mostrar o botão para a próxima pergunta
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}