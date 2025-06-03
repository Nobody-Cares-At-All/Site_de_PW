let top10L
let top5
let top10
let btn = document.querySelector("button");

function userInfoGet() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return userInfo;
}

onload = function userLoad() {
    top5 = document.querySelector("#top5");
    top10 = document.querySelector("#top10");
    top10F().then(() => {
        top5Load();
        top10Load();
        updateAPI();
    });
}

function top10Load() {
    top10.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        if(top10L[i].score === null) {
            if (i == 9) {
                top10.innerHTML += `<li>${i + 1}º - ----------</li>`; 
            }else{
                top10.innerHTML += `<li>${i + 1}º - -----------</li>`;
            }
        }else {
            top10.innerHTML += `<li>${i + 1}º - [${top10L[i].nome}] - [${top10L[i].score}]</li>`;
        }
    }
}

function top5Load() {
    let userInfo = userInfoGet()
    top5.innerHTML = "";   
    let top = "top";
    for (let i = 1; i <= 5; i++) {
        if(userInfo[top + i] == null) {
            top5.innerHTML += `<li>${i}º - -----------</li>`;
        }else {
            top5.innerHTML += `<li>${i}º - [${userInfo[top + i]}]</li>`;
        }
    }
}

async function top10F(){
    return fetch("https://api.jsonbin.io/v3/b/683b8d258960c979a5a3a214", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$VVeeX2nC7Y9bgUxZVdyob.D1lxkFN0D4i4.AkZqzju2kYlFwKvuPu"
        }
    })
    .then(response => response.json())
    .then(data => {
        top10L = data.record.top10
    })
}

function scoreUpdate(score) {
    let userInfo = userInfoGet()
    if (score > userInfo[top5] || userInfo[top5] == null) {
        top5Update(score);
    }
    if (score > top10L[9].score || top10L[9].score == null) {
        top10Update(score);
    }
    updateAPI();
}

function top5Update(score) {
    let userInfo = userInfoGet()
    for (let i = 1; i <= 5; i++) {
        if ((userInfo["top" + i] == null || score > userInfo["top" + i]) && (i == 1 || score < userInfo["top" + (i - 1)])) {
            for (let j = 5; j > i; j--) {
                userInfo["top" + j] = userInfo["top" + (j - 1)];
            }
            userInfo["top" + i] = score;
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            break;
        }
    }
    top5Load();
}

function top10Update(score) {
    let userInfo = userInfoGet()
    top10F()
    for (let i = 0; i < 10; i++) {
        if ((top10L[i].score == null || score > top10L[i].score) && (i == 0 || score < top10L[i - 1].score)) {
            for (let j = 9; j > i; j--) {
                top10L[j] = top10L[j - 1];
            }
            top10L[i] = { nome: userInfo.nome, score: score };
            break;
        }
    }
    top10Load();
}

async function updateAPI() {
    let userInfo = userInfoGet();

    const response = await fetch("https://api.jsonbin.io/v3/b/683b8d258960c979a5a3a214", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$VVeeX2nC7Y9bgUxZVdyob.D1lxkFN0D4i4.AkZqzju2kYlFwKvuPu"
        }
    });
    const data = await response.json();
    const utilizadores = data.record.utilizadores;

    utilizadores[userInfo.n] = {
        ...utilizadores[userInfo.n],
        nome: userInfo.nome,
        passe: userInfo.passe,
        top1: userInfo.top1,
        top2: userInfo.top2,
        top3: userInfo.top3,
        top4: userInfo.top4,
        top5: userInfo.top5
    };

    const putResponse = await fetch("https://api.jsonbin.io/v3/b/683b8d258960c979a5a3a214", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$VVeeX2nC7Y9bgUxZVdyob.D1lxkFN0D4i4.AkZqzju2kYlFwKvuPu"
        },
        body: JSON.stringify({
            utilizadores: utilizadores,
            top10: top10L
        })
    });

    if (putResponse.ok) {
        console.log("Top5 do usuário atualizado com sucesso na API.");
    } else {
        console.error("Erro ao atualizar o top5 do usuário na API:", putResponse.statusText);
    }
}
