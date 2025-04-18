document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');

    if (!searchInput) {
        console.error("Erro: O campo de busca 'search' não foi encontrado!");
        return;
    }

    function iniciarBusca() {
        const tituloBombando = document.querySelector('.titulo-bombando');
        if (!tituloBombando) return;

        searchInput.addEventListener('input', (event) => {
            const value = event.target.value.toLowerCase();
            const items = document.querySelectorAll('.itens-produtos');
            let hasResults = false;

            if (value !== '') {
                items.forEach(item => {
                    const value = formatString(event.target.value);
                    const produtoTitulo = formatString(item.querySelector('.titulo-produtos')?.textContent || '');
                    const itemMatchesSearch = produtoTitulo.includes(value);

                    item.style.display = itemMatchesSearch ? 'block' : 'none';
                    if (itemMatchesSearch) hasResults = true;
                });

                tituloBombando.textContent = hasResults ? 'Produtos encontrados!' : 'Nenhum produto encontrado!';
            } else {
                items.forEach(item => item.style.display = 'block');
                tituloBombando.textContent = 'Produtos que estão bombando!';
            }
        });
    }

    // ⚡️ Observa mudanças no DOM para esperar pelo `.titulo-bombando`
    const observer = new MutationObserver(() => {
        if (document.querySelector('.titulo-bombando')) {
            iniciarBusca();
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});



function formatString(value) {
    return value
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}