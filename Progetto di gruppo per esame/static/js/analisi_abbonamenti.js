// Simula l'aggiornamento dei dati delle analisi
document.addEventListener('DOMContentLoaded', function () {
    // Questi dati possono provenire da un'API o un database in un'applicazione reale
    const soldBase = 1500;
    const canceledBase = 200;
    const avgDurationBase = 12;

    const soldPremium = 800;
    const canceledPremium = 100;
    const avgDurationPremium = 10;

    const soldBusiness = 300;
    const canceledBusiness = 50;
    const avgDurationBusiness = 14;

    // Aggiorna il DOM con i dati
    document.getElementById('sold-base').innerText = soldBase;
    document.getElementById('canceled-base').innerText = canceledBase;
    document.getElementById('avg-duration-base').innerText = avgDurationBase;

    document.getElementById('sold-premium').innerText = soldPremium;
    document.getElementById('canceled-premium').innerText = canceledPremium;
    document.getElementById('avg-duration-premium').innerText = avgDurationPremium;

    document.getElementById('sold-business').innerText = soldBusiness;
    document.getElementById('canceled-business').innerText = canceledBusiness;
    document.getElementById('avg-duration-business').innerText = avgDurationBusiness;
});
