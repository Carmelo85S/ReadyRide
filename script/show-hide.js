function hideShow(infoId) {
    const infoSection = document.getElementById(infoId);
    const button = infoSection.previousElementSibling.querySelector('.menu-cta');

    // Toggle della classe active
    infoSection.classList.toggle('active');

    // Cambia il testo del pulsante
    if (infoSection.classList.contains('active')) {
        button.textContent = 'Show Less';
    } else {
        button.textContent = 'Show More';
    }
}
