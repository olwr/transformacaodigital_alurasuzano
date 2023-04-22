// get the values 
document.querySelector("button").onclick = function calcularNotas() {
    var nota1 = parseFloat(document.querySelector("#bimestre1").value);
    var nota2 = parseFloat(document.querySelector("#bimestre2").value);
    var nota3 = parseFloat(document.querySelector("#bimestre3").value);
    var nota4 = parseFloat(document.querySelector("#bimestre4").value);

    // calculate
    var media = (nota1 + nota2 + nota3 + nota4);
    var notafinal = media.toFixed(1);

    // display nota na página
    if (media >= 24) {
        document.querySelector("h3").innerHTML = "Aprovado com a média final de " + notafinal;
    } else if (media = NaN) {
        document.querySelector("h3").innerHTML = "ERRO! Preencha todos os campos"
    } else {
        document.querySelector("h3").innerHTML = "Reprovado com a média final de " + notafinal;
    }
    event.preventDefault();
}
