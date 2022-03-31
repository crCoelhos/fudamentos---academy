window.onload = function () {
    let carregar = document.querySelector("button#load");
    let tabela = document.querySelector("table");
    const xhr = new XMLHttpRequest();
    if (carregar) {
        carregar.addEventListener('click', () => {
            document.getElementById('totalReg').innerHTML = "Total de registros: 7";


            let url = 'https://raw.githubusercontent.com/crCoelhos/gestorHospitalar/main/profissionais%20-%20Copia.json';
            fetch(url).then(response => response.json()).then(dados => {
                for (let item in dados) {
                    let linha = document.createElement("tr");
                    let id = document.createElement("td");
                    let nome = document.createElement("td");
                    let conselho = document.createElement("td");
                    let especialidade = document.createElement("td");
                    let clinica = document.createElement("td");
                    let acoes = document.createElement("td");
                    id.classList.add("fit");
                    id.textContent = dados[item].id;
                    nome.textContent = dados[item].nome
                    conselho.textContent = dados[item].conselho
                    especialidade.textContent = dados[item].especialidade
                    clinica.textContent = dados[item].clinica
                    acoes.innerHTML = "<button type='button'> Editar </button>" + "<button type='button' class='excluir'> Excluir </button>"
                    linha.appendChild(id);
                    linha.appendChild(nome);
                    linha.appendChild(conselho);
                    linha.appendChild(especialidade);
                    linha.appendChild(clinica);
                    linha.appendChild(acoes);
                    tabela.tBodies[0].appendChild(linha);
                };
            });

        });
    };
}