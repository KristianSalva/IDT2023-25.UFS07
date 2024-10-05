//Scorrimento liscio per i link della navbar.
//Cambio colore del bottone "Scopri di più" al passaggio del mouse.
//Messaggio di benvenuto al caricamento della pagina.

// Aggiunge un effetto di scorrimento liscio quando si clicca sui link della navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Esempio di una funzione che cambia il colore del bottone "Scopri di più" al passaggio del mouse
const discoverButton = document.querySelector('.btn');

discoverButton.addEventListener('mouseover', function () {
    discoverButton.style.backgroundColor = '#ff9800';
});

discoverButton.addEventListener('mouseout', function () {
    discoverButton.style.backgroundColor = '#1a73e8';
});

// Funzione per mostrare un messaggio di benvenuto quando si carica la pagina
window.addEventListener('load', function () {
    setTimeout(() => {
        alert('Benvenuto sul sito Fast & Go!');
    }, 500);
});
