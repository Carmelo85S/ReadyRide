const menuItems = [
    {
        title: "Unmatched Fleet",
        content: "Explore our exclusive collection of luxury vehicles, featuring the latest models from prestigious brands. Whether you're looking for a sleek sports car or a spacious SUV, we have the perfect ride to elevate your experience.",
    },
    {
        title: "Competitive Pricing",
        content: "Enjoy luxury without breaking the bank. We offer competitive rates and transparent pricing with no hidden fees, ensuring you get the best value for your experience.",
    },
    {
        title: "Flexible Rental Options",
        content: "Whether you need a car for a few hours, a day, or longer, we provide flexible rental options tailored to your needs. Choose from daily, weekly, or monthly rates that fit your schedule.",
    },
    {
        title: "Assistance",
        content: "Drive with peace of mind knowing that our rentals include comprehensive insurance coverage and 24/7 roadside assistance. We're here to ensure your safety and comfort throughout your journey.",
    },
];

// Function to generate the menu sections dynamically
function generateMenu() {
    const menuContainer = document.querySelector('.menu');

    menuItems.forEach((item, index) => {
        // Create the menu title section
        const titleSection = document.createElement('section');
        titleSection.className = 'menu-title';

        const titleHeading = document.createElement('h2');
        titleHeading.className = 'title';
        titleHeading.textContent = item.title;

        // Create a button instead of a link
        const showMoreButton = document.createElement('button');
        showMoreButton.className = 'menu-cta';
        showMoreButton.textContent = 'Show More';
        
        // Set up the button click handler
        showMoreButton.onclick = function() {
            hideShow(`info${index}`); // Call your hideShow function
        };

        titleSection.appendChild(titleHeading);
        titleSection.appendChild(showMoreButton);

        // Create the info section
        const infoSection = document.createElement('section');
        infoSection.className = 'info';
        infoSection.id = `info${index}`;

        const paragraph = document.createElement('p');
        paragraph.className = 'paragraph';
        paragraph.textContent = item.content;

        infoSection.appendChild(paragraph);

        // Append to the menu container
        menuContainer.appendChild(titleSection);
        menuContainer.appendChild(infoSection);
    });
}

generateMenu();
