document.addEventListener('DOMContentLoaded', function () {
    // Simulazione dei dati
    const userVehiclesCount = 12;  // Numero veicoli utilizzati
    const userKmTraveled = 3500;  // Km percorsi

    // Popola i dati nella pagina
    document.getElementById('user-vehicles-count').innerText = userVehiclesCount;
    document.getElementById('user-km-traveled').innerText = userKmTraveled;
});
