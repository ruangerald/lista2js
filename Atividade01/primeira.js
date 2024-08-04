function atividadeUm(){
    let respostaUm = document.getElementById("respostaUm")
    let comprimento = document.getElementById("comprimento").value 
    let lado = document.getElementById("lado").value
    let altura = document.getElementById("altura").value
    
    let area = lado ** 2
    console.log("área = " + area)

    let volume = (area * altura) / 3
    console.log("volume = " + volume)

    respostaUm.innerHTML = "O valor do Volume da Pirâmide é igual a: " + volume.toFixed(2) + "m3"
}