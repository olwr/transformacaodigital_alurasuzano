// NÚMERO CPU
var cpuNumber = parseInt(Math.random() * (15 - 0) + 0);

// TENTATIVAS
var attempts = document.querySelector(".attempts");
var attemptsCount = 0;
var maxAttempts = 3;
var guesses = 2;

// FUNÇÃO JOGAR
document.querySelector(".play").onclick = function play() {
    // NÚMERO JOGADOR
    var playerInput = document.querySelector("input").value;

    // INTERFACE
    var result = document.querySelector("h2");
    var playButton = document.querySelector(".play");

    // CPU VS PLAYER
    if (cpuNumber == playerInput) {
        result.textContent = "Você acertou!";
        playButton.disabled = true;
    } else if (playerInput < 0 || playerInput > 15) {
        result.textContent = "Número inválido, tente outra vez";
    } else if (playerInput < cpuNumber) {
        result.textContent = "Quente, o número é maior";
    } else if (playerInput > cpuNumber) {
        result.textContent = "Frio, o número é menor";
    }

    if (attemptsCount != maxAttempts) {
        attempts.textContent = "Você tem " + guesses-- + " chances restantes";
        maxAttempts--;
    } else if (attemptsCount == maxAttempts) {
        attempts.textContent = "Tentativas zeradas";
        playButton.disabled = true;
    }

    if (attemptsCount == maxAttempts && cpuNumber != playerInput) {
        result.textContent = "GAME OVER, o número era " + cpuNumber;
        attempts.textContent = "Humanos nunca me vencerão!";
        playButton.disabled = true;
    }

    if (attempts == maxAttempts && cpuNumber == playerInput) {
        attempts.textContent = "Sorte de principiante, duvido me ganhar de novo!";
    }

    if (attempts != maxAttempts && cpuNumber == playerInput) {
        attempts.textContent = "Sorte de principiante, duvido me ganhar de novo!";
    }

    document.querySelector(".reset").onclick = function reset() {
        location.reload(true);
    }
}