let IPosI1 = [0, 3, 4, 5, 6]
let IPosI2 = [5, 0, 1, 2, 3]
let IForm = 0

function gerarObjetoI(){
    return {
        IPos1: [
            // Bloco A1
            document.getElementById("cell-" + (IPosI1[0] - 1) + "-" + IPosI1[1]),
            // Bloco A2
            document.getElementById("cell-" + (IPosI1[0] - 1) + "-" + IPosI1[2]),
            // Bloco A3
            document.getElementById("cell-" + (IPosI1[0] - 1) + "-" + IPosI1[3]),
            // Bloco A4
            document.getElementById("cell-" + (IPosI1[0] - 1) + "-" + IPosI1[4]),
            // Bloco 1
            document.getElementById("cell-" + IPosI1[0] + "-" + IPosI1[1]),
            // Bloco 2
            document.getElementById("cell-" + IPosI1[0] + "-" + IPosI1[2]),
            // Bloco 3
            document.getElementById("cell-" + IPosI1[0] + "-" + IPosI1[3]),
            // Bloco 4
            document.getElementById("cell-" + IPosI1[0] + "-" + IPosI1[4]),
            // Bloco F1
            window.getComputedStyle(document.getElementById("cell-" + (IPosI1[0] + 1) + "-" + IPosI1[1])).backgroundColor,
            // Bloco F2
            window.getComputedStyle(document.getElementById("cell-" + (IPosI1[0] + 1) + "-" + IPosI1[2])).backgroundColor,
            // Bloco F3
            window.getComputedStyle(document.getElementById("cell-" + (IPosI1[0] + 1) + "-" + IPosI1[3])).backgroundColor,
            // Bloco F4
            window.getComputedStyle(document.getElementById("cell-" + (IPosI1[0] + 1) + "-" + IPosI1[4])).backgroundColor,
        ],
        IPos2: [
            // Bloco A1
            document.getElementById("cell-" + (IPosI2[1] - 1)+ "-" + IPosI2[0]),
            null,
            null,
            null,
            // Bloco 1
            document.getElementById("cell-" + IPosI2[1] + "-" + IPosI2[0]),
            // Bloco 2
            document.getElementById("cell-" + IPosI2[2] + "-" + IPosI2[0]),
            // Bloco 3
            document.getElementById("cell-" + IPosI2[3] + "-" + IPosI2[0]),
            // Bloco 4
            document.getElementById("cell-" + IPosI2[4] + "-" + IPosI2[0]),
            // Bloco F1
            window.getComputedStyle(document.getElementById("cell-" + (IPosI2[4] + 1) + "-" + IPosI2[0])).backgroundColor,
            "rgb(82, 82, 82)",
            "rgb(82, 82, 82)",
            "rgb(82, 82, 82)"
        ],
        cor: "cyan"
    };
}

async function criar_I() {
    for (let i = 1; i < 20; i++) {
        let objeto_I = gerarObjetoI()
        let n
        if(IForm === 0){
            n = objeto_I.IPos1
            if(i != 1){
                n[0].style.backgroundColor = corFundo
            }
            if(i != 1){
                n[1].style.backgroundColor = corFundo
             }
            if(i != 1){
                n[2].style.backgroundColor = corFundo
            }
            if(i != 1){
                n[3].style.backgroundColor = corFundo;
            }
        }else{
            n = objeto_I.IPos2
            if(i != 1){
                n[0].style.backgroundColor = corFundo
            }
        }
        
        
        n[4].style.backgroundColor = objeto_I.cor
        n[5].style.backgroundColor = objeto_I.cor
        n[6].style.backgroundColor = objeto_I.cor
        n[7].style.backgroundColor = objeto_I.cor

        if (n[8] != corFundo || n[9] != corFundo || n[10] != corFundo || n[11] != corFundo) {
            IPosI1[0] = 0
            IPosI1[1] = 3
            IPosI1[2] = 4
            IPosI1[3] = 5
            IPosI1[4] = 6

            IPosI2[0] = 5
            IPosI2[1] = 0
            IPosI2[2] = 1
            IPosI2[3] = 2
            IPosI2[4] = 3
            random()
            break
        }

        IPosI1[0]++
        IPosI2[1]++
        IPosI2[2]++
        IPosI2[3]++
        IPosI2[4]++
        
        await sleep(500)
    }
}