function parImpar(){
    let respostaSeis = document.getElementById("respostaSeis")
    let numeros = document.getElementById("numeros").value;
    let valores = numeros.split(",").map(Number);

    let somaPares = 0;
    let somaImpares = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) {
            somaPares += valores[i];
        } else {
            somaImpares += valores[i];
        }
    }

    respostaSeis.innerHTML = "Soma dos Pares: " + somaPares +"; Soma dos Impares: " + somaImpares
}