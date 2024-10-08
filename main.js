const form = document.getElementById('form-contatos');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTelefone();

});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-sobrenome');
    const inputTel = document.getElementById('telefone');

    if (inputNome.value && inputTel.value) {
        
        nome.push(inputNome.value);
        telefone.push(inputTel.value);

        alert('Contato adicionado!');
    }
        
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;

    atualizaTabela();

    }

    inputNome.value = '';
    inputTel.value = '';


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

   

   