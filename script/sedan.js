const rentCarData = [
    {
        name: 'Mercedes-Benz S-Class',
        image: '../../image-car/image-sedan/mercedes-s-class.jpg',
        class: 'sedan',
        link: 'mercedes-s-class.html',
        price: '$1,200',
    },
    {
        name: 'BMW 7 Series',
        image: '../../image-car/image-sedan/bmw-7-series.jpg',
        class: 'sedan',
        link: 'bmw-7-series.html',
        price: '$1,100',
    },
    {
        name: 'Audi A8',
        image: '../../image-car/image-sedan/audi-a8.jpg',
        class: 'sedan',
        link: 'audi-a8.html',
        price: '$1,000',
    },
    {
        name: 'Lexus LS',
        image: '../../image-car/image-sedan/lexus-ls.jpg',
        class: 'sedan',
        link: 'lexus-ls.html',
        price: '$1,150',
    },
    {
        name: 'Jaguar XJ',
        image: '../../image-car/image-sedan/jaguar-xj.jpg',
        class: 'sedan',
        link: 'jaguar-xj.html',
        price: '$1,100',
    },
    {
        name: 'Genesis G90',
        image: '../../image-car/image-sedan/genesis-g90.jpg',
        class: 'sedan',
        link: 'genesis-g90.html',
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
