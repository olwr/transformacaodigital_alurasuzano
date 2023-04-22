// selecionar teclas
// adicionar valores
// selecionar campo tel
// digitar números
let campoTel = document.querySelector("input[type=tel]");

document.querySelector("#tecla_1").onclick = function digite1() {
    campoTel.value += 1;
}
document.querySelector("#tecla_2").onclick = function digite2() {
    campoTel.value += 2;
}

document.querySelector("#tecla_3").onclick = function digite3() {
    campoTel.value += 3;
}

document.querySelector("#tecla_4").onclick = function digite4() {
    campoTel.value += 4;
}

document.querySelector("#tecla_5").onclick = function digite5() {
    campoTel.value += 5;
}

document.querySelector("#tecla_6").onclick = function digite6() {
    campoTel.value += 6;
}

document.querySelector("#tecla_7").onclick = function digite7() {
    campoTel.value += 7;
}

document.querySelector("#tecla_8").onclick = function digite8() {
    campoTel.value += 8;
}

document.querySelector("#tecla_9").onclick = function digite9() {
    campoTel.value += 9;
}

document.querySelector("#tecla_*").onclick = function digite11() {
    campoTel.setAttribute("value", "*");
}

document.querySelector("#tecla_0").onclick = function digite0() {
    let num0 = 0;
    campoTel.value += num0.value;
}

document.querySelector("#tecla_#").onclick = function digite12() {
    let num12 = "#";
    campoTel.value += num12.value;
}
