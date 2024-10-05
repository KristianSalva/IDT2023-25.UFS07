//Validazione semplice del modulo di contatto.
//Simulazione dell'invio con messaggio di successo.
//Pulizia automatica del modulo dopo l'invio.

// Funzione per gestire l'invio del modulo di contatto
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita l'invio del form standard

    // Recupera i dati dal modulo
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validazione dei dati (controlla se tutti i campi sono compilati)
    if (name === '' || email === '' || message === '') {
        alert('Si prega di compilare tutti i campi.');
        return;
    }

    // Simulazione dell'invio del modulo (puoi sostituire questa parte con una chiamata API reale)
    setTimeout(() => {
        alert('Messaggio inviato con successo. Ti risponderemo al più presto!');
    }, 1000);

    // Pulisce il modulo dopo l'invio
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
