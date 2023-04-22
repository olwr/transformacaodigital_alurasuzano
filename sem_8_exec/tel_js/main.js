// referência lista de teclas do alura fone
const listaDeTeclas = document.querySelectorAll("input[type=button]");

// referência input tel "digite seu telefone"
const inputTel = document.querySelector("input[type=tel]");

let valor = document.querySelector('[type=tel]').value.length;

for (i = 0; i < listaDeTeclas.length; i++) {
    // referência tecla = lista + posição[] i++
    const tecla = listaDeTeclas[i];

    tecla.onclick = function () {
        inputTel.value += tecla.value; // valor do input tel incrementa com o valor das teclas clicadas
    }

    tecla.onkeydown = function (evento) {
    if (evento.key == " " || evento.key == "Enter") { // define a tecla pressionada pelo seu código
        tecla.classList.add("ativa");
    }
}

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    }
}

if (valor > 10) {
    inputTel
}