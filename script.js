document.getElementById("formContato").addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let status = document.getElementById("status");

    if (nome === "" || email === "" || mensagem === "") {
        status.textContent = "Por favor, preencha todos os campos.";
        status.style.color = "#8b5e3c"; // marrom rústico
    } else if (!email.includes("@")) {
        status.textContent = "Digite um e-mail válido.";
        status.style.color = "#a94442"; // tom terroso avermelhado
    } else {
        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "#6b4226"; // marrom mais forte
    }
});

document.getElementById("toggleTema").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
