function hideShow(infoId) {
    const infoSection = document.getElementById(infoId);
    const button = infoSection.previousElementSibling.querySelector('.menu-cta');

    infoSection.classList.toggle('active');

    if (infoSection.classList.contains('active')) {
        button.textContent = 'Show Less';
    } else {
        button.textContent = 'Show More';
    }
}
