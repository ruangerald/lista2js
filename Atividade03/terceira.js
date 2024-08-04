function celPFar(){
    let respostaFar = document.getElementById("respostaFar")

    let celRecebido = document.getElementById("CelPFar").value

    let farResposta = (celRecebido * [9/5]) + 32

    console.log("O resultado da Conversão é: " + farResposta)

    respostaFar.innerHTML = "O resultado da Conversão é: " + farResposta
}

function farPCel(){
    let respostaCel = document.getElementById("respostaCel")

    let farRecebido = document.getElementById("FarPCel").value

    let celResposta = (farRecebido - 32) * (5/9)

    console.log("O resultado da Conversão é: " + celResposta)
    respostaCel.innerHTML = "O resultado da Conversão é: " + celResposta.toFixed(2)
}