const rentCarData = [
    {
        name: 'Range Rover Autobiography',
        image: '../../image-car/image-suv/range-rover-autobiography.jpg',
        class: 'suv',
        link: 'range-rover-autobiography.html',
        price: '$1,500',
    },
    {
        name: 'Mercedes-Benz G-Class',
        image: '../../image-car/image-suv/mercedes-g-class.jpg',
        class: 'suv',
        link: 'mercedes-g-class.html',
        price: '$1,800',
    },
    {
        name: 'BMW X7',
        image: '../../image-car/image-suv/bmw-x7.jpg',
        class: 'suv',
        link: 'bmw-x7.html',
        price: '$1,200',
    },
    {
        name: 'Audi Q8',
        image: '../../image-car/image-suv/audi-q8.jpg',
        class: 'suv',
        link: 'audi-q8.html',
        price: '$1,100',
    },
    {
        name: 'Lexus LX',
        image: '../../image-car/image-suv/lexus-lx.jpg',
        class: 'suv',
        link: 'lexus-lx.html',
        price: '$1,250',
    },
    {
        name: 'Cadillac Escalade',
        image: '../../image-car/image-suv/cadillac-escalade.jpg',
        class: 'suv',
        link: 'cadillac-escalade.html',
        price: '$1,300',
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
