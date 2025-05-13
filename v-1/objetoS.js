let SPosI1 = [0, 1, 2, 4, 5]
let SPosI2 = [0, 1, 3, 4, 5]
let SForm = 0

function gerarObjetoS(){
    return {
        SPos1: [
            // Bloco A1
            document.getElementById("cell-" + (SPosI1[0] - 1) + "-" + SPosI1[3]),
            // Bloco A2
            document.getElementById("cell-" + (SPosI1[1] - 1) + "-" + SPosI1[4]),
            null,
            // Bloco 1
            document.getElementById("cell-" + SPosI1[0] + "-" + SPosI1[3]),
            // Bloco 2
            document.getElementById("cell-" + SPosI1[1] + "-" + SPosI1[3]),
            // Bloco 3
            document.getElementById("cell-" + SPosI1[1] + "-" + SPosI1[4]),
            // Bloco 4
            document.getElementById("cell-" + SPosI1[2] + "-" + SPosI1[4]),
            // Bloco F1
            window.getComputedStyle(document.getElementById("cell-" + (SPosI1[1] + 1) + "-" + SPosI1[3])).backgroundColor,
            // Bloco F2
            window.getComputedStyle(document.getElementById("cell-" + (SPosI1[2] + 1) + "-" + SPosI1[4])).backgroundColor,
            "rgb(82, 82, 82)"
        ],
        SPos2: [
            // Bloco A1
            document.getElementById("cell-" + (SPosI2[0] - 1) + "-" + SPosI2[2]),
            // Bloco A2
            document.getElementById("cell-" + (SPosI2[0] - 1) + "-" + SPosI2[3]),
            // Bloco A3
            document.getElementById("cell-" + (SPosI2[1] - 1) + "-" + SPosI2[4]),
            // Bloco 1
            document.getElementById("cell-" + SPosI2[0] + "-" + SPosI2[2]),
            // Bloco 2
            document.getElementById("cell-" + SPosI2[0] + "-" + SPosI2[3]),
            // Bloco 3
            document.getElementById("cell-" + SPosI2[1] + "-" + SPosI2[3]),
            // Bloco 4
            document.getElementById("cell-" + SPosI2[1] + "-" + SPosI2[4]),
            // Bloco F1
            window.getComputedStyle(document.getElementById("cell-" + (SPosI2[0] + 1) + "-" + SPosI2[2])).backgroundColor,
            // Bloco F2
            window.getComputedStyle(document.getElementById("cell-" + (SPosI2[1] + 1) + "-" + SPosI2[3])).backgroundColor,
            // Bloco F3
            window.getComputedStyle(document.getElementById("cell-" + (SPosI2[1] + 1) + "-" + SPosI2[4])).backgroundColor
        ],
        cor: "green"
    };
}

async function criar_S() {
    for (let i = 1; i < 20; i++) {
        let objeto_S = gerarObjetoS()
        let n
        if(SForm === 0){
            n = objeto_S.SPos1
            if(i != 1){
                n[0].style.backgroundColor = corFundo
            }
            if(i != 1){
                n[1].style.backgroundColor = corFundo
             }
        }else{
            n = objeto_S.SPos2
            if(i != 1){
                n[0].style.backgroundColor = corFundo
            }
            if(i != 1){
                n[1].style.backgroundColor = corFundo
            }
            n[2].style.backgroundColor = corFundo
        }
        
        
        n[3].style.backgroundColor = objeto_S.cor
        n[4].style.backgroundColor = objeto_S.cor
        n[5].style.backgroundColor = objeto_S.cor
        n[6].style.backgroundColor = objeto_S.cor

        if (n[7] != corFundo || n[8] != corFundo || n[9] != corFundo) {
            SPosI1[0] = 0
            SPosI1[1] = 1
            SPosI1[2] = 2
            SPosI1[3] = 4
            SPosI1[4] = 5

            SPosI2[0] = 0
            SPosI2[1] = 1
            SPosI2[2] = 3
            SPosI2[3] = 4
            SPosI2[4] = 5
            random()
            break
        }

        SPosI1[0]++
        SPosI1[1]++
        SPosI1[2]++
        SPosI2[0]++
        SPosI2[1]++
        await sleep(500)
    }
}