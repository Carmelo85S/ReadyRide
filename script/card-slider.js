document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("cardContainer");

    const cars = [
        {
            image: "./image-index/most-wanted/mustang.jpg",
            model: "Ford Mustang",
            price: "From 20000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/bentley.jpg",
            model: "Bentley",
            price: "From 25000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/bmw.jpg",
            model: "BMW",
            price: "From 25000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/ferrari.jpg",
            model: "Ferrari",
            price: "From 30000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/lamborghini.jpg",
            model: "Lamborghini",
            price: "From 35000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/alfa.jpg",
            model: "Alfa Romeo",
            price: "From 10000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/porche.jpg",
            model: "Porche",
            price: "From 15000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/tesla.jpg",
            model: "Tesla",
            price: "From 8000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/mustang.jpg",
            model: "Ford Mustang",
            price: "From 20000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/bentley.jpg",
            model: "Bentley",
            price: "From 25000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/bmw.jpg",
            model: "BMW",
            price: "From 25000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/ferrari.jpg",
            model: "Ferrari",
            price: "From 30000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/lamborghini.jpg",
            model: "Lamborghini",
            price: "From 35000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/alfa.jpg",
            model: "Alfa Romeo",
            price: "From 10000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/porche.jpg",
            model: "Porche",
            price: "From 15000 Sek per day"
        },
        {
            image: "./image-index/most-wanted/tesla.jpg",
            model: "Tesla",
            price: "From 8000 Sek per day"
        },
    ];

    // Create card
    function createCard(car) {
        const card = document.createElement("section");
        card.classList.add("most-wanted-card");

        card.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h3 class="car-model">${car.model}</h3>
            <p>${car.price}</p>
            <button>Rent now</button>
        `;

        return card;
    }

    // Add card to the container
    cars.forEach(car => {
        const cardElement = createCard(car);
        cardContainer.appendChild(cardElement);
    });

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    const scrollAmount = 500; 

    nextButton.addEventListener('click', () => {
        cardContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        cardContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    prevButton.addEventListener('keydown', (event) => {
        if (event.key === "Enter" || event.key === " ") {
            cardContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    });

    nextButton.addEventListener('keydown', (event) => {
        if (event.key === "Enter" || event.key === " ") {
            cardContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});
