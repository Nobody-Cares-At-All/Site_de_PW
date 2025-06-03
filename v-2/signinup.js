//user info
let campoN = document.querySelector("#nome")
let campoP = document.querySelector("#passe")
let campoCP = document.querySelector("#cPasse")
let botao = document.querySelector("button")
let user,base

botao.onclick = function(){
    fetch("https://api.jsonbin.io/v3/b/683b8d258960c979a5a3a214", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$VVeeX2nC7Y9bgUxZVdyob.D1lxkFN0D4i4.AkZqzju2kYlFwKvuPu"
        }
    })
    .then(response => response.json())
    .then(data => {
        base = data.record; // Agora base recebe o valor do fetch
        let pagina = document.querySelector("h1").textContent;
        if (pagina == "Sign In") {
            signIn();
        } else if (pagina == "Sign Up") {
            signUp();
        }
    })
    .catch(err => {
        console.error(err);
    });
}

//signIn
function signIn(){
    let nome = campoN.value
    let passe = campoP.value

    user = base.utilizadores.find(item => item.passe == passe && item.nome == nome);
    if(user == undefined){
        alert("Email e/ou palavra passe está errado/s. Tente novamente")
    }else{
        let userInfo = {
            nome: user.nome,
            passe: user.passe,
            top1: user.top1,
            top2: user.top2,
            top3: user.top3,
            top4: user.top4,
            top5: user.top5,
            n: base.utilizadores.findIndex(item => item.nome === nome)
        }
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        window.location.href = "Tetris.html";
    }

}

//signUp
function signUp() {
    let nome = campoN.value.trim();
    let cPasse = campoCP.value.trim();
    let passe = campoP.value.trim();

    if (!nome || !cPasse || !passe) {
        return alert("Tem de preencher todos os campos.");
    }

    if (nome.length < 4) {
        return alert("O nome tem de ter pelo menos 4 caracteres.");
    }

    let existe = base.utilizadores.find(item => item.nome === nome);
    if (existe) {
        return alert("O nome já está a ser usado.");
    }

    if (passe !== cPasse) {
        return alert("A palavra passe e a confirmação não coincidem.");
    }

    let novoUser = {
        nome,
        passe,
        top1: null,
        top2: null,
        top3: null,
        top4: null,
        top5: null
    };

    base.utilizadores.push(novoUser);

    fetch("https://api.jsonbin.io/v3/b/683b8d258960c979a5a3a214", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$VVeeX2nC7Y9bgUxZVdyob.D1lxkFN0D4i4.AkZqzju2kYlFwKvuPu"
        },
        body: JSON.stringify(base)
    })
        .then(res => {
            if (res.ok) alert("Utilizador registado com sucesso!"), window.location.href = "signin.html";
            else throw new Error("Erro ao guardar.");
        })
        .catch(err => {
            console.error("Erro ao enviar:", err);
            alert("Erro ao comunicar com o servidor.");
        });
}