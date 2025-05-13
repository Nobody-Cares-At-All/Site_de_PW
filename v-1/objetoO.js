let OPosI = [0, 1, 4, 5];

function gerarObjetoO(){
    return {
        OPos1: [
            document.getElementById("cell-" + (OPosI[0] - 1) + "-" + OPosI[2]),
            document.getElementById("cell-" + (OPosI[0] - 1) + "-" + OPosI[3]),
            document.getElementById("cell-" + OPosI[0] + "-" + OPosI[2]),
            document.getElementById("cell-" + OPosI[0] + "-" + OPosI[3]),
            document.getElementById("cell-" + OPosI[1] + "-" + OPosI[2]),
            document.getElementById("cell-" + OPosI[1] + "-" + OPosI[3]),
            window.getComputedStyle(document.getElementById("cell-" + (OPosI[1] + 1) + "-" + OPosI[2])).backgroundColor,
            window.getComputedStyle(document.getElementById("cell-" + (OPosI[1] + 1) + "-" + OPosI[3])).backgroundColor
        ],
        cor: "yellow"
    };
}

async function criar_O() {
    for (let i = 1; i < 20; i++) {
        let objeto_O = gerarObjetoO();
        if(i != 1){
            objeto_O.OPos1[0].style.backgroundColor = corFundo
        }
        if(i != 1){
            objeto_O.OPos1[1].style.backgroundColor = corFundo
        }

        objeto_O.OPos1[2].style.backgroundColor = objeto_O.cor
        objeto_O.OPos1[3].style.backgroundColor = objeto_O.cor
        objeto_O.OPos1[4].style.backgroundColor = objeto_O.cor
        objeto_O.OPos1[5].style.backgroundColor = objeto_O.cor

        if (objeto_O.OPos1[6] != corFundo || objeto_O.OPos1[7] != corFundo) {
            OPosI[0] = 0
            OPosI[1] = 1
            OPosI[2] = 4
            OPosI[3] = 5
            random()
            break;
        }

        OPosI[0]++;
        OPosI[1]++;
        await sleep(500);
    }

};
