function atividadeDois(){
    let respostaDois = document.getElementById("respostaDois")
    let mmhg = document.getElementById("mmhg").value
    console.log("mmHg = " + mmhg)
    let psi = mmhg / 51.715

    console.log("psi = " + psi)
    respostaDois.innerHTML = "O valor convertdi é igual a: " + psi + " PSI"
}