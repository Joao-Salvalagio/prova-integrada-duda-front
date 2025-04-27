
let questionNumber = 0;
let currentQuestionIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function iniciarProva() {
    questionNumber = 0;
    currentQuestionIndex = 0;
    exibirQuestao();
}

function exibirQuestao() {
    const container = document.getElementById('prova-container');
    container.innerHTML = '';

    if (currentQuestionIndex < questoesIntegradas.length) {
        const item = questoesIntegradas[currentQuestionIndex];

        if (item.tipo === 'section') {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'section-header';
            sectionDiv.textContent = item.titulo;
            container.appendChild(sectionDiv);
            currentQuestionIndex++;
            exibirQuestao();
        } else {
            questionNumber++;
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `<p>${questionNumber}. ${item.question}</p>`;

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';

            const optionsWithIndex = item.options.map((option, i) => ({ text: option, index: i }));
            shuffleArray(optionsWithIndex);

            optionsWithIndex.forEach((optionObj) => {
                const button = document.createElement('button');
                button.textContent = optionObj.text;
                button.onclick = () => verificarResposta(optionObj.index, item.answer);
                optionsDiv.appendChild(button);
            });

            questionDiv.appendChild(optionsDiv);
            questionDiv.innerHTML += `<div id="correct-answer" class="answer" style="display:none;"></div>`;
            questionDiv.innerHTML += `<button class="next-button" id="next-button" style="display:none;" onclick="proximaQuestao()">Próxima Pergunta</button>`;

            container.appendChild(questionDiv);
        }
    } else {
        container.innerHTML = '<p>Parabéns! Você concluiu toda a prova! 🎉</p>';
    }
}

function verificarResposta(selecionado, correto) {
    const respostaDiv = document.getElementById('correct-answer');
    const buttons = document.querySelectorAll('.options button');

    if (selecionado === correto) {
        respostaDiv.textContent = 'Resposta correta! ✅';
    } else {
        const textoCorreto = questoesIntegradas[currentQuestionIndex].options[correto];
        respostaDiv.textContent = `Resposta incorreta! ❌ A resposta correta é: ${textoCorreto}`;
    }

    respostaDiv.style.display = 'block';
    buttons.forEach(btn => btn.disabled = true);
    document.getElementById('next-button').style.display = 'block';
}

function proximaQuestao() {
    currentQuestionIndex++;
    exibirQuestao();
}
