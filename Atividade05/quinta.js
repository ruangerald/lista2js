function maiorMenor(){
    let respostaCinco = document.getElementById("respostaCinco")
    let numeros = document.getElementById("numeros").value
    let valores = numeros.split(",").map(Number)

    let maior = valores[0];
    let menor = valores[0];
    for (var i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i];
        }
        if (valores[i] < menor) {
            menor = valores[i];
        }
    }

    respostaCinco.innerHTML = "O maior número é: " + maior +"; e o menor é: " + menor
}