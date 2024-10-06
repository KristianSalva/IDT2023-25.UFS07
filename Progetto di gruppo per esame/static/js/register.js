document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function (e) {
        // Reset any previous error messages
        errorMessage.innerText = '';

        // Verifica che le password coincidano
        if (passwordInput.value !== confirmPasswordInput.value) {
            e.preventDefault();  // Previeni l'invio del form
            errorMessage.innerText = "Le password non coincidono.";
        }
    });
});
