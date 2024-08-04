function divSete(){
    let respostaSete = document.getElementById("respostaSete")
    let numeros = document.getElementById("numeros").value
    let valores = numeros.split(",").map(Number)

    let divPSete = 0

    for (let i = 0; i < valores.length; i++){
        if(valores[i] % 7 === 0 ){
            divPSete += 1
        }
    }

    respostaSete.innerHTML = "A quantidade de números divisíveis por 7 é igual a: " + divPSete
}