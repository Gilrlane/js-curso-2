// Altera o conteúdo da tag h1
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';

// Função para exibir mensagem no console ao clicar no botão Console
function verificarConsole() {
    console.log('O botão foi clicado');
}

// Função para exibir um alerta ao clicar no botão Alerta
function botaoAlerta() {
    alert('Eu amo JS');
}

// Função para perguntar o nome de uma cidade e exibir um alerta com a resposta
function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você.`);
    }
}

// Função para somar dois números inteiros e exibir o resultado
function somarNumeros() {
    let num1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    let num2 = parseInt(prompt('Digite o segundo número inteiro:'));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`O resultado da soma é: ${num1 + num2}`);
    } else {
        alert('Por favor, insira apenas números inteiros.');
    }
}
