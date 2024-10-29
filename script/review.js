const reviews = [
    {
      imgSrc: "./image-index/reviews-face/woman.png",
      altText: "woman face review icon",
      name: "Carla",
      location: "Stockholm",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, in optio autem, cum debitis architecto asperiores magni iure fugit sed eligendi, illum facere ut! Ipsum eaque eos amet dolores."
    },
    {
      imgSrc: "./image-index/reviews-face/woman.png",
      altText: "woman face review icon",
      name: "Carla",
      location: "Rome",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, in optio autem, cum debitis architecto asperiores magni iure fugit sed eligendi, illum facere ut! Ipsum eaque eos amet dolores."
    },
    {
      imgSrc: "./image-index/reviews-face/woman.png",
      altText: "woman face review icon",
      name: "Carla",
      location: "Stockholm",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, in optio autem, cum debitis architecto asperiores magni iure fugit sed eligendi, illum facere ut! Ipsum eaque eos amet dolores."
    }
  ];
  
  function createReviewCard({ imgSrc, altText, name, location, text }) {
    const card = document.createElement('section');
    card.className = 'card';
  
    card.innerHTML = `
      <img src="${imgSrc}" alt="${altText}">
      <div>
        <h3 class="card-name">${name}</h3>
        <p class="location">${location}</p>
      </div>
      <div class="card__text-container">
        <p class="card__text-info">${text}</p>
      </div>
    `;
  
    return card;
  }
  
  function renderReviewCards() {
    const container = document.querySelector('.review-cards-container');
    reviews.forEach(review => {
      const card = createReviewCard(review);
      container.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderReviewCards);
  