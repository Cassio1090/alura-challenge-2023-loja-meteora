let produtos = []
const endpointDaAPI = '/backend/produtos.json';

getBuscarProdutosDaAPI()
const elementoParaInserirProdutos = document.getElementById('produtos')

async function getBuscarProdutosDaAPI() {
   const res = await fetch(endpointDaAPI);
   const data = await res.json();
   produtos = data.produtos;
   exibirProdutosNaTela(produtos)
}

function exibirProdutosNaTela(listaDeProdutos) {
    const elementoParaInserirProdutos = document.querySelector('.container-produtos-bombando');

    // if (!elementoParaInserirProdutos) {
    //     console.error("Elemento '.container-produtos-bombando' não encontra.");
    //     return;
    // }

    let htmlProdutos = '<h2 class="titulo-bombando">Produtos que estão bombando!</h2><div class="container-produtos">';

    listaDeProdutos.forEach(produto => {
        htmlProdutos += `
            <div class="itens-produtos">
                <img class="imagens-produtos" src="${produto.imagem}" alt="${produto.alt}">
                <h3 class="titulo-produtos">${produto.titulo}</h3>
                <p class="texto-produtos">${produto.descricao}</p>
                <p class="preco-produtos">${produto.preco}</p>
                <div class="tags">
                    <span class="tag">${produto.categoria}</span>
                </div>
                <button class="botao-ver-mais" data-modal="${produto.datamodal}" >${produto.botao}</button>
            </div>
        `;
    });
    htmlProdutos += '</div>';
    elementoParaInserirProdutos.innerHTML = htmlProdutos; // Aqui garantimos que tudo seja inserido de uma vez
    
}