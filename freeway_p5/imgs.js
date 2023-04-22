// VARIÁVEIS IMAGS 
let imgFundo;
let imgAtor;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarros;

// VARIÁVEIS SONS 
let trilha;
let ponto;
let bateu;



function preload() {
    imgFundo = loadImage("imgs/estrada.png");
    imgAtor = loadImage("imgs/ator-1.png");
    imgCarro1 = loadImage("imgs/carro-1.png");
    imgCarro2 = loadImage("imgs/carro-2.png");
    imgCarro3 = loadImage("imgs/carro-3.png");
    imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro1, imgCarro2, imgCarro3]
    trilha = loadSound("sounds/trilha.mp3");
    ponto = loadSound("sounds/pontos.wav");
    bateu = loadSound("sounds/colidiu.mp3");
}
