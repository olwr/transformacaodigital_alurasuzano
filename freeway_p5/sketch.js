function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imgFundo);
  ator();
  desenhaCarros();
  movimentaCarros();
  semParar();
  colisao();
  pontuacao();
}



