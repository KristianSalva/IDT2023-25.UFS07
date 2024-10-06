document.addEventListener('DOMContentLoaded', function () {
    // Simulazione dei dati
    const businessVehiclesCount = 150;  // Numero veicoli aziendali
    const businessSubscriptionsCount = 75;  // Numero abbonamenti business

    // Popola i dati nella pagina
    document.getElementById('business-vehicles-count').innerText = businessVehiclesCount;
    document.getElementById('business-subscriptions-count').innerText = businessSubscriptionsCount;
});
