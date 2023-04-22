// LISTA VARIÁVEIS CARROS 
let carrosX = [0, 0, 0, 0, 0, 0];
let carrosY = [40, 96, 150, 210, 270, 318];
let carrosAltura = 40;
let carrosLargura = 50;
let velocidade = [2, 2.5, 3.2, 5, 3.3, 2.3]


// FUNÇÕES DOS CARROS 

// DESENHA OS CARROS 
function desenhaCarros() {
    for (i = 0; i < imgCarros.length; i++) {
        image(imgCarros[i], carrosX[i], carrosY[i], carrosLargura, carrosAltura);
    }
}

// MOVIMENTAÇÃO 
function movimentaCarros() {
    for (i = 0; i < carrosX.length; i++) {
        carrosX[i] += velocidade[i];
    }
}

function semParar() {
    for (i = 0; i < carrosX.length; i++) {
        if (passou(carrosX[i])) {
            carrosX[i] = -10;
        }
    }
}

function passou(carrosX) {
    return carrosX > 510;
}