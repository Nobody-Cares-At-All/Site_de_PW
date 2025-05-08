let jogo = document.querySelector("#borda")
let bloco = document.querySelector("#cubo")

/*jogo.onclick = function () {
    jogo.innerHTML += 
        '<div id="cubo"></div>'

    for (let i = 0; i < 10;) {
        bloco.y = (bloco.y) + 35
        console.log("bloco desceu 35px")
    }
}*/

jogo.onclick = function (e) {
    console.log(e)
    e.clientY = e.clientY - 35
}