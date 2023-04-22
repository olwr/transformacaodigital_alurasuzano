// VARIÁVEIS ATOR 
let atorX = 85;
let atorY = 366;
let atorComprimento = 30;
let atorAltura = 30;
let colidiu = false;

let pontos = 0;

// FUNÇÕES DO ATOR 
function ator() {
    image(imgAtor, atorX, atorY, atorComprimento, atorAltura);

    if (keyIsDown(UP_ARROW)) {
        atorY -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        atorY += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        atorX -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        atorX += 3;
    }
}

// VERIFICA COLISÃO 
function colisao() {
    // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (i = 0; i < imgCarros.length; i++) {
        colidiu = collideRectCircle(carrosX[i], carrosY[i], carrosLargura, carrosAltura, atorX, atorY, 15)
        if (colidiu) {
            morreu();
        }
    }
    
    if (atorY > 400) {
        atorY = 385;
    }
    if (atorY < 0) {
        atorY = 385;
        pontos++;
        ponto.play();
    }
    if (atorX > 490) {
        atorX = 485;
        atorY = 385;
    }
    if (atorX < 0) {
        atorX = 10;
        atorY = 385;
    }
}

function morreu() {
    atorY = 366;
    bateu.play();
    
    if (pontos > 0) {
        pontos--;
    }
}

// PONTUAÇÃO 
function pontuacao() {
    fill(255, 240, 60);
    textAlign(CENTER);
    textSize(20);
    text(pontos, width / 5, 25);
}