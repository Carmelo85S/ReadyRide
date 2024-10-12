const cardData = [
    {
      name: 'Monthly subscription',
      info: 'Experience the freedom of driving a different luxury vehicle every month.',
      class: 'luxury-car',
      link: 'monthly-subscription.html',
    },
    {
      name: 'Chauffeur service',
      info: 'Our chauffeurs ensure your safety and comfort with an elegant touch to your journey.',
      class: 'chaffeaur',
      link: 'chauffeur-service.html',
    },
    {
      name: 'Private lounge',
      info: 'Enjoy exclusive access to private airport lounges when you rent with us.',
      class: 'private-lounge',
      link: 'private-lounge.html',
    },
    {
      name: 'Long term rental',
      info: 'Perfect blend of luxury and reliability with our long-term car rental services.',
      class: 'long-term',
      link: 'long-term-rental.html',
    },
    {
      name: 'Short term rental',
      info: 'Perfect for business trips or spontaneous adventures.',
      class: 'short-term',
      link: 'short-term-rental.html',
    },
    {
      name: 'Wedding car rental',
      info: 'Modern elegance to complement your celebration.',
      class: 'wedding',
      link: 'wedding-car-rental.html',
    },
    {
      name: 'Driving tour',
      info: 'Unforgettable adventure with our scenic driving tours!',
      class: 'driving-tours',
      link: 'driving-tour.html',
    },
    {
      name: 'Drive experience',
      info: 'Experience the thrill of speed on a professional racetrack!',
      class: 'drive-experience',
      link: 'drive-experience.html',
    },
];

function createCard(name, info, className, link) {
  return `
    <section class="card ${className}">
      <section class="card-info-container">
        <h3 class="card-head">${name}</h3>
        <p class="card-info">${info}</p>
        <a class="cta" href="${link}">Learn More</a>
      </section>
    </section>
  `;
}

function renderCards() {
  const cardsContainer = document.querySelector('.cards_container');

  cardData.forEach(card => {
    cardsContainer.innerHTML += createCard(card.name, card.info, card.class, card.link);
  });
}

renderCards();
