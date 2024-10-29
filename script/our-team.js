const cardTeam = [
    {
        name: "Gustav Andersson",
        info: 'Chief Executive Officer',
        email: 'g.andersson@example.com',
        className: 'team-member-card',
        image: '../image-about/team-gustav.jpg'
    },
    {
        name: "Hakan Flyngberg",
        info: 'Distribution Manager',
        email: 'h.flyngberg@example.com',
        className: 'team-member-card',
        image: '../image-about/team-hakan.jpg'
    },
    {
        name: "Elisabeth Bellucci",
        info: 'H.R. Director',
        email: 'e.bellucci@example.com',
        className: 'team-member-card',
        image: '../image-about/team-elisabeth.jpg'
    },
    {
        name: "Carl Pittolunghi",
        info: 'Chief Financial Officer',
        email: 'c.pittolunghi@example.com',
        className: 'team-member-card',
        image: '../image-about/team-carl.jpg'
    },
    {
        name: "Anna Hogdson",
        info: 'Marketing Director',
        email: 'a.hogdson@example.com',
        className: 'team-member-card',
        image: '../image-about/team-anna.jpg'
    },
    {
        name: "Melanie Chaffer",
        info: 'Executive Assistant',
        email: 'm.chaffer@example.com',
        className: 'team-member-card',
        image: '../image-about/team-melanie.jpg'
    }
];

function createTeamCard(name, info, email, className, image) {
    return `
    <section class="card ${className}">
        <img class="card-image" src="${image}" alt="Photo of ${name}">
        <section class="card-info-container">
            <h3 class="card-head">${name}</h3>
            <p class="card-info">${info}</p>
            <a href="mailto:${email}" class="card-email">
                <i class="fa-regular fa-envelope"></i>
            </a>
        </section>
    </section>
    `;
}

function renderTeamCards() {
    const teamCardsContainer = document.querySelector('.team_cards');
    let cardsMarkup = '';

    cardTeam.forEach(card => {
        cardsMarkup += createTeamCard(card.name, card.info, card.email, card.className, card.image);
    });

    teamCardsContainer.innerHTML = cardsMarkup;
}

renderTeamCards();
