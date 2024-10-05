document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita l'invio del form standard

    // Recupera i valori dal modulo
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validazione dei dati
    if (password !== confirmPassword) {
        alert('Le password non corrispondono.');
        return;
    }

    // Simula l'invio del modulo (puoi sostituire questa parte con una chiamata API reale)
    console.log('Registrazione:', {
        name: name,
        email: email,
        password: password
    });

    setTimeout(() => {
        alert('Registrazione completata con successo!');
        // Pulisci il modulo dopo l'invio
        document.getElementById('registration-form').reset();
    }, 1000);
});
