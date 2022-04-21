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
    document.body.style.background = "rgb(34, 34, 34)"
    apagar.style.background = "#da3f28"
    acender.style.background = "#333C83"
};

/***************************************************************/
acender.addEventListener("click", acenderLampada);

function acenderLampada () {
    lampadaQuebrada.style.display = "none"
    lampadaApagada.style.display = "none"
    lampadaAcesa.style.display = "block"
    acender.style.background = "#da3f28"
    apagar.style.background = "#333C83"

    document.body.style.background = "rgb(255,251,160)"

    
    
}

/***************************************************************/

container.addEventListener("click", quebrar)
function quebrar () {
    lampadaQuebrada.style.display = "block"
    lampadaApagada.style.display = "none"
    lampadaAcesa.style.display = "none"
    apagar.style.background = "#333C83"
    acender.style.background = "#333C83"
    document.body.style.background = "rgb(34, 34, 34)"
}
