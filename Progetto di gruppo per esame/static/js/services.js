//Clic su ogni servizio per mostrare maggiori dettagli tramite un alert.
//Effetto hover per enfatizzare le card dei servizi.

// Funzione per mostrare maggiori dettagli sui servizi
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.addEventListener('click', function () {
        const serviceDetails = [
            "I pedaggi autostradali vengono gestiti automaticamente grazie al nostro dispositivo.",
            "Con Fast & Go puoi pagare i parcheggi in molte città italiane senza bisogno di cercare le macchinette.",
            "Noleggia un'auto in pochi minuti con il nostro servizio di noleggio auto a breve e lungo termine."
        ];

        alert(serviceDetails[index]);
    });
});

// Esempio di effetto hover su ogni card dei servizi
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', function () {
        card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', function () {
        card.style.boxShadow = 'none';
    });
});
