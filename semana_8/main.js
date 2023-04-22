function playSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    /*
    if (elemento === null || elemento != null && elemento.localName != "audio") { // nulo ou não nulo e(mas) tag diferente de audio
        console.log("Elemento não encontrado ou seletor inválido");    
    }*/

    if (elemento != null && elemento.localName === "audio") {  // não nulo e tag igual a audio
        elemento.play();
    } else { // nulo ou não nulo e(mas) tag diferente de audio
        console.log("Elemento não encontrado ou seletor inválido");
    }
}

    const listaDeTeclas = document.querySelectorAll(".tecla");

    // while (i < listaDeTeclas.length) {}
    for (i = 0; i < listaDeTeclas.length; i++) {
        const tecla = listaDeTeclas[i];
        const pads = tecla.classList[1];

        // "primeiroNome_ + classTecla"
        const idsAudio = `#som_${pads}`; // template string


        tecla.onclick = function () {
            playSom(idsAudio);
        }

        tecla.onkeydown = function (evento) {
            if (evento.key === " " || evento.key === "Enter") {
                tecla.classList.add("ativa");
            }
        }

        tecla.onkeyup = function () {
            tecla.classList.remove("ativa");
        }

    }