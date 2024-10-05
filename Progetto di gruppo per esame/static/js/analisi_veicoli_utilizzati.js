// Simula l'aggiornamento dei dati delle analisi
document.addEventListener('DOMContentLoaded', function () {
    // Questi dati possono provenire da un'API o un database in un'applicazione reale
    const paymentCars = "Mensile";
    const numberOfCars = 2000;
    const kmCars = 15000;

    const paymentMotorcycles = "Mensile";
    const numberOfMotorcycles = 500;
    const kmMotorcycles = 3000;

    const paymentHeavyVehicles = "Mensile";
    const numberOfHeavyVehicles = 800;
    const kmHeavyVehicles = 20000;

    const paymentBusinessVehicles = "Mensile";
    const numberOfBusinessVehicles = 300;
    const kmBusinessVehicles = 8000;

    // Aggiorna il DOM con i dati
    document.getElementById('payment-cars').innerText = paymentCars;
    document.getElementById('number-of-cars').innerText = numberOfCars;
    document.getElementById('km-cars').innerText = kmCars;

    document.getElementById('payment-motorcycles').innerText = paymentMotorcycles;
    document.getElementById('number-of-motorcycles').innerText = numberOfMotorcycles;
    document.getElementById('km-motorcycles').innerText = kmMotorcycles;

    document.getElementById('payment-heavy-vehicles').innerText = paymentHeavyVehicles;
    document.getElementById('number-of-heavy-vehicles').innerText = numberOfHeavyVehicles;
    document.getElementById('km-heavy-vehicles').innerText = kmHeavyVehicles;

    document.getElementById('payment-business-vehicles').innerText = paymentBusinessVehicles;
    document.getElementById('number-of-business-vehicles').innerText = numberOfBusinessVehicles;
    document.getElementById('km-business-vehicles').innerText = kmBusinessVehicles;
});
