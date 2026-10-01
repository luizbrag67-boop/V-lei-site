// Monitor de pontuação do simulador
let pontosA = 0;
let pontosB = 0;

const displayA = document.getElementById('score-br');
const displayB = document.getElementById('score-usa');
const botaoA = document.getElementById('btn-br');
const botaoB = document.getElementById('btn-usa');
const botaoReset = document.getElementById('btn-reset');

function atualizarPlacar() {
    displayA.textContent = pontosA;
    displayB.textContent = pontosB;
}

botaoA.addEventListener('click', () => {
    pontosA++;
    atualizarPlacar();
});

botaoB.addEventListener('click', () => {
    pontosB++;
    atualizarPlacar();
});

botaoReset.addEventListener('click', () => {
    pontosA = 0;
    pontosB = 0;
    atualizarPlacar();
});
