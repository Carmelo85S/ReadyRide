const rentCarData = [
    {
        name: 'Lamborghini Huracán EVO',
        image: '../../image-performance/lamborghini-huracan-evo.jpg',
        class: 'performance',
        link: 'lamborghini-huracan.html',
        price: '$1,800',
    },
    {
        name: 'McLaren 720S',
        image: '../../image-performance/mclaren-720S.jpg',
        class: 'performance',
        link: 'mclaren-720s.html',
        price: '$1,500',
    },
    {
        name: 'Ferrari 488 GTB',
        image: '../../image-performance/ferrari-488.jpg',
        class: 'performance',
        link: 'ferrari-488.html',
        price: '$1,800',
    },
    {
        name: 'Aston Martin DBS Superleggera',
        image: '../../image-performance/aston-martin-dbs.jpg',
        class: 'performance',
        link: 'aston-martin-dbs.html',
        price: '$2,000',
    },
    {
        name: 'Bugatti Chiron',
        image: '../../image-performance/bugatti-chiron.jpg',
        class: 'performance',
        link: 'bugatti-chiron.html',
        price: '$3,000',
    },
    {
        name: 'Koenigsegg Agera RS',
        image: '../../image-performance/koenigsegg-agera-rs.jpg',
        class: 'performance',
        link: 'koenigsegg-agera-rs.html',
        price: '$3,200',
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
