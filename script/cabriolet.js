const rentCarData = [
    {
        name: 'Aston Martin DB12',
        image: '../../image-car/image-cabriolet/aston-martin.jpg',
        class: 'cabriolet',
        link: 'aston-martin.html',
        price: '$1,200',
    },
    {
        name: 'BMW 4 Series',
        image: '../../image-car/image-cabriolet/bmw430.jpg',
        class: 'cabriolet',
        link: 'bmw430.html',
        price: '$400',
    },
    {
        name: 'BMW 8 Series M8',
        image: '../../image-car/image-cabriolet/bmw-8.jpg',
        class: 'cabriolet',
        link: 'bmw8.html',
        price: '$700',
    },
    {
        name: 'BMW Z4',
        image: '../../image-car/image-cabriolet/bmw-z4.jpg',
        class: 'cabriolet',
        link: 'bmw-z4.html',
        price: '$500',
    },
    {
        name: 'Porsche 911 Turbo',
        image: '../../image-car/image-cabriolet/porsche911turbo.jpg',
        class: 'cabriolet',
        link: 'porsche.html',
        price: '$350',
    },
    {
        name: 'Ford Mustang',
        image: '../../image-car/image-cabriolet/ford-mustang.jpg',
        class: 'cabriolet',
        link: 'ford-mustang.html',
        price: '$300',
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
