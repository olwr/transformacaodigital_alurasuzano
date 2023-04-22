document.querySelector("button").onclick = function converter() {
    var dolar = parseFloat(document.querySelector("input").value);

    var real = dolar * 5.17;

    var valorConvertido = document.querySelector("h2");
    var conversao = "R$" + real;
    valorConvertido.innerHTML = conversao;
    return true;
}