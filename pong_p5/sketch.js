// VARIÁVEIS BOLINHA
let bolinhaX = 400;
let bolinhaY = 300;
let diametro = 15;
let raio = diametro / 2;

// VELOCIDADE DA BOLINHA
let velocidadeX = 8;
let velocidadeY = 8;

// VARIÁVEIS DA RAQUETE PLAYER
let playerX = 5;
let playerY = 225;

let comprimento = 10;
let altura = 90;
let colidiu = false;

// VARIÁVEIS DA RAQUETE CPU
let cpuX = 785;
let cpuY = 225;
let velocidadeCpuY;
let erro = 0;

// PONTOS 
let pontosPlayer = 0;
let pontosCpu = 0;

// SONS 
let trila;
let raquetada;
let ponto;

function preload() {
  trila = loadSound("billCo.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(800, 600);
  trila.loop();
}

function draw() {
  background(35);
  bolinha();
  movimento();
  colisao();
  raquete(playerX, playerY);
  movimentoRaquete();
  // colisaoRaquete();
  colisao2D(playerX, playerY);
  colisaoRaqueteBorda();
  raquete(cpuX, cpuY);
  movimentoCpu();
  colisao2D(cpuX, cpuY);
  placar();
  pontua();
  // multiplayer();
  chanceDeErrar();
  bolaNova();
}

// DESENHA BOLINHA
function bolinha() {
  circle(bolinhaX, bolinhaY, diametro);
}

// MOVIMENTAÇÃO DA BOLINHA
function movimento() {
  bolinhaX += velocidadeX;
  bolinhaY += velocidadeY;
}

// COLISÃO BOLINHA X BORDAS
function colisao() {
  if (bolinhaX + raio > width || bolinhaX - raio < 0) {
    velocidadeX *= -1;
  }
  if (bolinhaY + raio > height || bolinhaY - raio < 0) {
    velocidadeY *= -1;
  }
}

// DESENHA RAQUETE
function raquete(x, y) {
  rect(x, y, comprimento, altura)
}

// MOVIMENTAÇÃO DA RAQUETE 
function movimentoRaquete() {
  if (keyIsDown(UP_ARROW)) {
    playerY -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY += 10;
  }
}

// COLISÃO RAQUETE X BORDA
function colisaoRaqueteBorda() {
  // PLAYER 
  if (playerY - altura < -135) { // fora do frame acima
    playerY = 0;
  }
  if (playerY - altura > 410) { // fora do frama abaixo
    playerY = 510;
  }

  // CPU
  if (cpuY - altura < -135) { // fora do frame acima
    cpuY = 0;
  }
  if (cpuY - altura > 410) { // fora do frama abaixo
    cpuY = 510;
  }

}

// COLISÃO BOLINHA X RAQUETE
function colisaoRaquete() {
  if (bolinhaX - raio < playerX + comprimento && bolinhaY - raio < playerY + altura && bolinhaY + raio > playerY) {
    velocidadeX *= -1;
  }
}

// COLISÃO BOLINHA X RAQUETE COLLIDE2D
function colisao2D(x, y) {
  // PLAYER 
  colidiu = collideRectCircle(x, y, comprimento, altura, bolinhaX, bolinhaY, diametro);
  if (colidiu) {
    velocidadeX *= - 1;
    raquetada.play();
  }
}

// MOVIMENTO RAQUETE CPU 
function movimentoCpu() {
  if (velocidadeCpuY = bolinhaY - cpuY - comprimento / 2 - 30);
  cpuY += velocidadeCpuY + erro;
  chanceDeErrar();
}

// MODO MULTIPLAYER 
function multiplayer() {
  if (keyIsDown(87)) {
    cpuY -= 10;
  }
  if (keyIsDown(83)) {
    cpuY += 10;
  }
}

// MOSTRA PLACAR 
function placar() {
  textAlign(CENTER);
  textSize(16)
  fill(255);
  text(pontosPlayer, 380, 26);
  text("│", 400, 26)
  text(pontosCpu, 420, 26);
}

// ADICIONA PONTOS 
function pontua() {
  if (bolinhaX > 795) {
    pontosPlayer += 1;
    ponto.play();
  }
  if (bolinhaX < 5) {
    pontosCpu += 1;
    ponto.play();
  }
}

// CALCULA A CHANDE DA CPU ERRAR 
function chanceDeErrar() {
  if (pontosCpu >= pontosPlayer) {
    erro += 1;
    if (erro >= 39) {
      erro = 40;
    }
  } else {
    erro -= 1;
    if (erro <= 35) {
      erro = 35;
    }
  }
}

// IMPEDE A BOLINHA DE FICAR PRESA E PONTUANDO ADOIDADO 
function bolaNova() {
  if (bolinhaX + raio < playerX || bolinhaX + raio > 795) {  
    alert("bola presa, receba uma bola nova!");
    bolinhaX = 400;
  }
}