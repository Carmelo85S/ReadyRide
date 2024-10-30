const rentCarData = [
    {
        name: 'Aston Martin DB12',
        image: '../image-cabriolet/aston-martin.jpg',
        class: 'cabriolet',
        link: 'aston-martin.html',
        price: '$1,200',
    },
    {
        name: 'BMW 4 Series',
        image: '../image-cabriolet/bmw430.jpg',
        class: 'cabriolet',
        link: 'bmw430.html',
        price: '$400',
    },
    {
        name: 'BMW 8 Series M8',
        image: '../image-cabriolet/bmw-8.jpg',
        class: 'cabriolet',
        link: 'bmw8.html',
        price: '$700',
    },
    {
        name: 'BMW Z4',
        image: '../image-cabriolet/bmw-z4.jpg',
        class: 'cabriolet',
        link: 'bmw-z4.html',
        price: '$500',
    },
    {
        name: 'Porsche 911 Turbo',
        image: '../image-cabriolet/porsche911turbo.jpg',
        class: 'cabriolet',
        link: 'porsche.html',
        price: '$350',
    },
    {
        name: 'Ford Mustang',
        image: '../image-cabriolet/ford-mustang.jpg',
        class: 'cabriolet',
        link: 'ford-mustang.html',
        price: '$300',
    },
    {
        name: 'Maserati Grand Cabrio',
        image: '../image-cabriolet/maserati.jpg',
        class: 'cabriolet',
        link: 'maserati-grand-cabrio.html',
        price: '$1,000',
    }
];

function createRentCard(name, image, className, link, price) {
    return `
        <section class="card">
            <section class="card-model-container">
                <h3 class="card-head">${name}</h3>
            </section>
            <section class="card-image-container">
                <a href="${link}" target="_blank">
                    <img src="${image}" alt="${name}">
                </a>
            </section>
            <section class="card-prices-container">
                <h3 class="card-prices">${price} / per day</h3>
                <p class="spec">* for one month rental</p>
            </section>
        </section>
    `;
}

function renderRentCard() {
    const cardsRentContainer = document.querySelector('#rent-gallery');
    let cardsMarkUp = '';

    rentCarData.forEach(card => {
        cardsMarkUp += createRentCard(card.name, card.image, card.class, card.link, card.price);
    });

    cardsRentContainer.innerHTML = cardsMarkUp;
}

renderRentCard();
