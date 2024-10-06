///Il file JavaScript può simulare la selezione del ruolo dell'utente per inviare i dati corretti al server.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const roleMessage = document.getElementById('roleMessage');
    const roleInput = document.getElementById('role');

    form.addEventListener('submit', function (e) {
        // Simula il controllo del ruolo utente, ad esempio da un'API o database
        const username = document.getElementById('username').value;

        if (username === "admin") {
            roleInput.value = "admin";
            roleMessage.innerText = "Sei un amministratore.";
        } else if (username === "business") {
            roleInput.value = "business";
            roleMessage.innerText = "Sei un utente business.";
        } else {
            roleInput.value = "user";
            roleMessage.innerText = "Sei un utente normale.";
        }
    });
});
