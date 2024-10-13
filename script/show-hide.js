function hideShow(infoId) {
    const infoSection = document.getElementById(infoId); // Ottieni la sezione info specificata
    const button = infoSection.previousElementSibling.querySelector('.menu-cta'); // Ottieni il pulsante corrispondente

    // Toggle della classe active
    infoSection.classList.toggle('active');

    // Cambia il testo del pulsante
    if (infoSection.classList.contains('active')) {
        button.textContent = 'Show Less'; // Cambia testo in Show Less
    } else {
        button.textContent = 'Show More'; // Cambia testo in Show More
    }
}
