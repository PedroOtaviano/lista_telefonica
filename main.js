const form = document.getElementById("formLista")
const nomes = [];
const telefones = [];

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    if (adicionarLinha()) {
        ordenarListas();  
        atualizaTabela();  
    }

})

function adicionarLinha(){
    const inputNome = document.getElementById("nome");
    const inputTelefone = document.getElementById("telefone");

    if(nomes.includes(inputNome.value)){
        alert(`O nome ${inputNome.value} já foi inserido.`)
        return false;
    }else if(telefones.includes(inputTelefone.value)){
        alert(`O nome ${inputTelefone.value} já foi inserido.`)
        return false;
    }else{
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value)

        inputNome.value = "";
        inputTelefone.value = "";

        return true;
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    let linhas = "";

    for (let i = 0; i < nomes.length; i++){
        linhas += `<tr><td>${nomes[i]}</td><td>${telefones[i]}</td></tr>`;
    }
    corpoTabela.innerHTML = linhas;
}

function ordenarListas(){
    const lista = nomes.map((nome, i) => {
        return {nome: nome, telefone: telefones[i]}
    });

    lista.sort((a, b) => a.nome.localeCompare(b.nome));

    for (let i = 0; i < lista.length; i++){
        nomes[i] = lista[i].nome
        telefones[i] = lista[i]. telefone
    }
}