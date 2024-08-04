function validaIdade(){
    let respostaQuatro = document.getElementById("respostaQuatro")

    let idade = document.getElementById("idade").value

    if (idade >= 16){
        respostaQuatro.innerHTML = "Você pode votar!"
    }else{
        respostaQuatro.innerHTML = "Você não pode votar!"
    }
}