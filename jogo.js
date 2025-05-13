let jogo = document.querySelector("#borda");
let start = document.querySelector("button");
//let cor = ["red", "green", "purple", "blue", "orange", "yellow", "cyan"]
let corFundo = "rgb(82, 82, 82)"
//let peças = ["Z", "S", "T", "J", "L", "O", "I"]
let peças = ["I", "O", "S"]

const linhas = 20;
const colunas = 10;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
        let celula = document.createElement("div");
        celula.classList.add("celula");
        celula.id = `cell-${linha}-${coluna}`;
        celula.style.backgroundColor = corFundo
        jogo.appendChild(celula);
    }
}
// teste de "colisão"
let celulaT = document.getElementById("cell-" + 10 + "-" + 5);
celulaT.style.backgroundColor = "blue";

start.addEventListener("click", function() {
    random()
});

function random(){
    let n = Math.floor(Math.random() * 3);
    let peça = peças[n];
    let fun = window[`criar_${peça}`]
    fun()
}

document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight") {
        console.log("D")
    }
    if (e.key == "ArrowLeft") {
        console.log("A")
    }
    if (e.key == "ArrowUp") {
        console.log("W")
        
    }
    if (e.key == "ArrowDown") {
        console.log("S")
    }
    if (e.key == "Space") {
    }
});