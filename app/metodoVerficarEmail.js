const campoDoEmail = document.querySelectorAll("[required]");

campoDoEmail.forEach((campo) => {
    campo.addEventListener("blur", () => validarEmail(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    email: {
        valueMissing: "O campo email não pode estar vazio para enviar",
        patternMismatch: "Por favor, preencha um email valido",
        tooShort: "O email deve conter pelo menos 4 caracteres"
    }
};

function validarEmail(campo) {
    const mensagemErro = campo.parentNode.querySelector('#email-erro');
    mensagemErro.textContent = ''; // Limpa a mensagem de erro anterior
    mensagemErro.classList.remove('ativo'); // Remove a classe 'ativo'

    if (campo.validity.valid) {
        return; // Campo válido, não exibe erro
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagemErro.textContent = mensagens.email[erro];
            mensagemErro.classList.add('ativo'); // Adiciona a classe 'ativo'
        }
    });
}

function validarFormatoEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("botao-enviar")) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;
        const mensagemErro = document.getElementById('email-erro');

        mensagemErro.textContent = ''; // Limpa a mensagem de erro anterior
        mensagemErro.classList.remove('ativo'); // Remove a classe 'ativo'

        if (!emailValue) {
            mensagemErro.textContent = "Por favor, preencha o campo de e-mail.";
            mensagemErro.classList.add('ativo');
            return;
        }        

        if (!validarFormatoEmail(emailValue)) {
            mensagemErro.textContent = "Por favor, insira um e-mail válido.";
            mensagemErro.classList.add('ativo');
            return;
        }

        const modalEmail = document.getElementById('modal-email');
        if (modalEmail) {
            modalEmail.showModal();
            document.body.style.overflow = "hidden";
        } else {
            console.error("O modal não foi encontrado no DOM.");
        }
    }
});