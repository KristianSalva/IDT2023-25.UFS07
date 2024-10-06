// l file JavaScript si occuperà del controllo degli accessi. 
// Verificherà se l'utente ha i permessi da amministratore, e in caso contrario lo reindirizzerà alla pagina di login o a un'altra pagina di errore.

document.addEventListener('DOMContentLoaded', function () {
    // Simula il controllo dell'accesso. 
    // In un'applicazione reale, il controllo dovrebbe essere gestito dal backend.
    
    const isAdmin = true; // Questo valore dovrebbe essere impostato dal server in base alla sessione utente.

    if (!isAdmin) {
        alert('Accesso non autorizzato. Devi essere un amministratore per accedere a questa pagina.');
        window.location.href = '/login'; // Reindirizza alla pagina di login o un'altra pagina
    }
});
