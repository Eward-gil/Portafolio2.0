function contActive() {
    var selector = document.getElementById("cont-colors");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgBlack() {
    var selector = document.getElementById("body");
    selector.classList.toggle("black");
}
function bgyellow() {
    var selector = document.getElementById("body");
    selector.classList.toggle("yellow");
}
function bgorange() {
    var selector = document.getElementById("body");
    selector.classList.toggle("orange");
}
function bgpurple() {
    var selector = document.getElementById("body");
    selector.classList.toggle("purple");
}
function bgred() {
    var selector = document.getElementById("body");
    selector.classList.toggle("red");
}
function bgoriginal() {
    var selector = document.getElementById("body");
    selector.classList.toggle("original");
}

// AOS.init();