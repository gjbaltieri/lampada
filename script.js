let apagar = document.getElementById("apagar");
let acender = document.getElementById("acender");
let lampada = document.getElementById("lampada");
let container = document.getElementById("container")


/***************************LAMPADA APAGADA***************************/
apagar.addEventListener("click", apagarLampada);
function apagarLampada() {
    if (!lampadaQuebrada()) {
    lampada.src = "./apagada.png"
    apagar.style.background = "#da3f28"
    acender.style.background = "#333C83"
    document.body.style.background = "rgb(34, 34, 34)"
    document.body.style.animation = ""}
};

/***************************LAMPADA ACESA***************************/

acender.addEventListener("click", acenderLampada);

function acenderLampada () {
    if (!lampadaQuebrada()) {
    lampada.src = "./acesa.png"
    acender.style.background = "#da3f28"
    apagar.style.background = "#333C83"
    document.body.style.animation = "bgAceso 2s linear 0ms 1 normal forwards"
    } 
};

/***************************LAMPADA QUEBRADA***************************/

lampada.addEventListener("dblclick", quebrar)
function quebrar () {

    lampada.src = "./quebrada.png"
    apagar.style.background = "#333C83"
    acender.style.background = "#333C83"
    document.body.style.background = "rgb(34, 34, 34)"
    document.body.style.animation = ""

};

/***************************MOUSE OVER***************************/

lampada.addEventListener("mouseover", function () {
    if (!lampadaQuebrada()) {
    lampada.src = "./acesa.png";
    document.body.style.animation = "bgAceso 2s linear 0ms 1 normal forwards"}
    acender.style.background = "#333C83"
    apagar.style.background = "#333C83"
})

/***************************MOUSE OUT***************************/

function lampadaQuebrada () {
    return lampada.src.indexOf ('quebrada') > -1
}

lampada.addEventListener ("mouseout", function () {
    if (!lampadaQuebrada())
        lampada.src="./apagada.png"
        document.body.style.animation = ""

})


