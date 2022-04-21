let apagar = document.getElementById("apagar");
let acender = document.getElementById("acender");
let lampadaQuebrada = document.getElementById("lampadaQuebrada");
let lampadaApagada = document.getElementById("lampadaApagada");
let lampadaAcesa = document.getElementById("lampadaAcesa");
let container = document.getElementById("container")


/***************************************************************/
apagar.addEventListener("click", apagarLampada);
function apagarLampada() {
    lampadaQuebrada.style.display = "none"
    lampadaAcesa.style.display = "none"
    lampadaApagada.style.display = "block"
    document.body.style.background = "black"

};

/***************************************************************/
acender.addEventListener("click", acenderLampada);

function acenderLampada () {
    lampadaQuebrada.style.display = "none"
    lampadaApagada.style.display = "none"
    lampadaAcesa.style.display = "block"
    document.body.style.background = "rgb(255,251,160)"

    
    
}

/***************************************************************/

container.addEventListener("click", quebrar)
function quebrar () {
    lampadaQuebrada.style.display = "block"
    lampadaApagada.style.display = "none"
    lampadaAcesa.style.display = "none"
    document.body.style.background = "black"
}
