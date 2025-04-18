const botoesFiltrar = document.querySelectorAll('.btn')

botoesFiltrar.forEach(btn => btn.addEventListener('click' , filtrarProdutos))

function filtrarProdutos() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let produtosFiltrados = produtos.filter(produto => produto.categoria == categoria);
    exibirProdutosNaTela(produtosFiltrados)    
}