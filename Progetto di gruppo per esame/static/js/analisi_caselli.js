// Simula l'aggiornamento dei dati delle analisi
document.addEventListener('DOMContentLoaded', function () {
    // Questi dati possono provenire da un'API o un database in un'applicazione reale
    const numberOfCars = 3000;
    const numberOfMotorcycles = 500;
    const numberOfHeavyVehicles = 800;
    const numberOfBusinessVehicles = 200;

    // Aggiorna il DOM con i dati
    document.getElementById('number-of-cars').innerText = numberOfCars;
    document.getElementById('number-of-motorcycles').innerText = numberOfMotorcycles;
    document.getElementById('number-of-heavy-vehicles').innerText = numberOfHeavyVehicles;
    document.getElementById('number-of-business-vehicles').innerText = numberOfBusinessVehicles;
});
