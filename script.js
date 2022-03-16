//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Holis";
} else if (11 < laHora && laHora < 19) {
    elSaludo = "Que talca";
} else {
    elSaludo = "Adiosito";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("aquipo")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var harrypotter;
function preload() {
    var api = "https://hp-api.herokuapp.com/api/characters/staff";
    harrypotter = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");



function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan(" ¿Sabíai que " + harrypotter[2].name + " es de la casa de " + harrypotter[2].house + "?").parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
}
function pagina() {
    createSpan(" ¿Sabíai que " + harrypotter[1].name + " es " + harrypotter[1].gender + "?").parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");
}