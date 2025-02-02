// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Declaração do array que armazenará os nomes dos amigos.
let amigos = [];

// Função responsável por adicionar um amigo à lista.
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação de entrada.
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    input.value = "";

    // Atualiza a lista de amigos exibida na página.
    atualizarLista();
}

// Função responsável por atualizar a visualização da lista de amigos.
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array e cria um elemento <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função responsável por realizar o sorteio aleatório do amigo secreto.
function sortearAmigo() {
    // Validação.
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    // Gera um índice aleatório e recupera o amigo correspondente.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoLista = document.getElementById("resultado");
    
    // Limpa o resultado anterior e insere o novo
    resultadoLista.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}