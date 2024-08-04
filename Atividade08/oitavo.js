function atividadeOito(){
    let respostaOito = document.getElementById("respostaOito")
    let numeros = document.getElementById("numeros").value
    let valores = numeros.split(",").map(Number)

    let divPTresECinco = 0
    let divPCinco = 0
    let divPTres = 0

    for (let i = 0; i < valores.length; i++){
        if(valores[i] % 3 === 0 && valores[i] % 5 === 0){
            divPTresECinco += 1
        }
        if(valores[i] % 5 === 0){
            divPCinco += 1
        }
        if(valores[i] % 3 === 0){
            divPTres += 1
        }
    }

    respostaOito.innerHTML = "A quantidade de valores divisíveis por 3 e 5 ao mesmo tempo é igual a: " + divPTresECinco + "; por 3: " + divPTres + "; por 5: " + divPCinco
}