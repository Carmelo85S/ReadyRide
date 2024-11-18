document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("cardContainer");

    const cars = [
        {
            image: "./image-car/image-cabriolet/aston-martin.jpg",
            model: "ASTON MARTIN",
            price: "From 12000 Sek per day",
            link: "./pages/cabriolet/aston-martin.html"
        },
        {
            image: "./image-car/image-cabriolet/porsche-911.jpg",
            model: "PORSCHE 911",
            price: "From 3500 Sek per day",
            link: "./pages/cabriolet/porsche.html"
        },
        {
            image: "./image-car/image-cabriolet/mustang.jpg",
            model: "Ford Mustang",
            price: "From 3000 Sek per day",
            link: "./pages/cabriolet/ford-mustang.html"
        },
        {
            image: "./image-car/image-performance/bugatti-white.jpg",
            model: "BUGATTI CHIRON",
            price: "From 30000 Sek per day",
            link: "./pages/performance/bugatti-chiron.html"
        },
        {
            image: "./image-car/image-performance/ferrari-488.jpg",
            model: "FERRARI 488",
            price: "From 18000 Sek per day",
            link: "./pages/performance/ferrari-488.html"
        },
        {
            image: "./image-car/image-sedan/audi-a8.jpg",
            model: "AUDI A8",
            price: "From 10000 Sek per day",
            link: "./pages/sedan/audi-a8.html"
        },
        {
            image: "./image-car/image-suv/audi-q8.jpg",
            model: "AUDI Q8",
            price: "From 11000 Sek per day",
            link: "./pages/suv/audi-q8.html"
        },
        {
            image: "./image-car/image-suv/bmw-x7.jpg",
            model: "BMW X7",
            price: "From 12000 Sek per day",
            link: "./pages/suv/bmw-x7.html"
        },
        {
            image: "./image-car/image-suv/cadillac-escalade.jpg",
            model: "CADILLAC",
            price: "From 13000 Sek per day",
            link: "./pages/suv/cadillac-escalade.html"
        },
        {
            image: "./image-car/image-performance/mc-laren-720S.jpg",
            model: "MC LAREN",
            price: "From 15000 Sek per day",
            link: "./pages/performance/mclaren-720s.html"
        }
    ];

    // Create card
    function createCard(car) {
        const card = document.createElement("section");
        card.classList.add("most-wanted-card");

        card.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h3 class="car-model">${car.model}</h3>
            <p>${car.price}</p>
            <a href="${car.link}" class="rent-now-button">Rent now</a>
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
