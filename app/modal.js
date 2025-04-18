document.addEventListener("DOMContentLoaded", function () {    
    const fecharModal = document.querySelectorAll(".botao-fechar-modal");

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("botao-ver-mais")) {
            console.log("Clicou no botão Ver Mais");

            // Pegando o ID do modal correto baseado no atributo data-modal do botão clicado
            const modalId = event.target.getAttribute("data-modal");
            console.log("Esse é o id: ", modalId);
            
            if (modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.showModal();
                    document.body.style.overflow = "hidden";
                } else {
                    console.error("O modal não foi encontrado no DOM.");
                }
            }
        }
    });   

    function closeModal(modalElement) {
        if (modalElement) {
            modalElement.close();
            document.body.style.overflow = "auto";
        }
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            const modalAberto = document.querySelector("dialog[open]");
            if (modalAberto) {
                closeModal(modalAberto);
            }
        }
    });

    fecharModal.forEach(buttonClose => {
        buttonClose.addEventListener("click", function () {
            const modalParaFechar = this.closest("dialog");
            closeModal(modalParaFechar);
        });
    });

    // Fecha o modal se o usuário clicar fora dele
    document.addEventListener("click", function (event) {
        if (event.target.tagName === "DIALOG") {
            closeModal(event.target);
        }
    });
});
