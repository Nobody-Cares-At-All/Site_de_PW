//user info
let campoN = document.querySelector("#nome")
let campoE = document.querySelector("#email")
let campoP = document.querySelector("#passe")
let botao = document.querySelector("button")
let user,base

onload = function(){
    baseFech()
}
botao.onclick = function(){
    let pagina = document.querySelector("h3").textContent
    if(pagina == "Sign In"){
        signIn()
    }else if (pagina == "Sign Up") {
        signUp()
    }
}

function baseFech(){
    fetch('https://api.jsonbin.io/v3/b/682c69ea8960c979a59d9586')   
        .then(response => response.json())
        .then(data => {
            // quando for para meter o link da api meter "data.record"
            base = data.record.record
            console.log(base)
        })
}

//signIn
function signIn(){
    let email = campoE.value
    let passe = campoP.value

    user = base.utilizadores.find(item => item.passe == passe && item.email == email);
    if(user == undefined){
        alert("Email e/ou palavra passe está errado/s. Tente novamente")
    }else{
        window.location.href = "Tetris.html";
    }
}

//signUp
function signUp() {
    let nome = campoN.value.trim();
    let email = campoE.value.trim();
    let passe = campoP.value.trim();

    if (!nome || !email || !passe) {
        return alert("Tem de preencher todos os campos.");
    }

    if (nome.length < 4) {
        return alert("O nome tem de ter pelo menos 4 caracteres.");
    }

    let existe = base.utilizadores.find(item => item.nome === nome || item.email === email);
    if (existe) {
        return alert("O email e/ou nome já está a ser usado.");
    }

    let novoUser = {
        nome,
        email,
        passe,
        top1: null,
        top2: null,
        top3: null,
        top4: null,
        top5: null
    };

    base.utilizadores.push(novoUser);

    fetch("https://api.jsonbin.io/v3/b/682c69ea8960c979a59d9586", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$VVeeX2nC7Y9bgUxZVdyob.D1lxkFN0D4i4.AkZqzju2kYlFwKvuPu"
        },
        body: JSON.stringify({ record: base })
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