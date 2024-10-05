// Funzione per salvare le impostazioni (simulata)
function saveSettings() {
    // Recupera i valori dal modulo delle informazioni personali
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Recupera le preferenze di notifica
    const emailNotifications = document.querySelector('input[name="email-notifications"]').checked;
    const smsNotifications = document.querySelector('input[name="sms-notifications"]').checked;

    // Simula il salvataggio delle impostazioni con una richiesta AJAX o Fetch (puoi sostituirlo con una vera chiamata API)
    console.log('Salvataggio delle impostazioni:');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Notifiche Email:', emailNotifications);
    console.log('Notifiche SMS:', smsNotifications);

    // Simula un ritardo di salvataggio
    setTimeout(() => {
        alert('Impostazioni salvate con successo!');
    }, 1000);
}
