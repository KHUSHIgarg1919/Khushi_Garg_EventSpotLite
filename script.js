// Mock event data
const events = [
    { id: 1, name: "Art Exhibition", date: "2024-11-10", location: "Modern Art Gallery, New York", description: "Explore modern art from local artists in a vibrant setting.", image: "Art_Exhibition.jpg" },
    { id: 2, name: "Food Fest", date: "2024-11-15", location: "Central Park, New York", description: "Taste a range of delicacies from renowned local chefs.", image: "Food_Fest.jpeg" },
    { id: 3, name: "Music Concert", date: "2024-11-20", location: "Downtown Hall, Los Angeles", description: "Experience live music from popular bands.", image: "Music_Concert.jpg" },
    { id: 4, name: "Tech Conference", date: "2024-12-05", location: "Silicon Valley Convention Center", description: "Meet the pioneers of the tech world and attend insightful sessions.", image: "Tech_Conference.jpg" },
    { id: 5, name: "Coding Hackathon", date: "2024-12-20", location: "Tech Hub, Austin", description: "A 24-hour challenge for coding enthusiasts with exciting prizes.", image: "Hackathon.png" },
    { id: 6, name: "Book Fair", date: "2025-01-10", location: "City Library, Seattle", description: "Browse through a large selection of books and meet authors.", image: "Book_Fair.jpg" },
    { id: 7, name: "Science Exhibition", date: "2025-02-05", location: "Museum of Science, San Francisco", description: "Explore scientific innovations and interactive displays.", image: "Science_Exhibition.jpg" }
];

// Render events on the main page
function renderEvents(eventList) {
    const eventListContainer = document.getElementById('event-list');
    eventListContainer.innerHTML = ''; // Clear existing content

    eventList.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.onclick = () => openModal(event);

        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.date} - ${event.location}</p>
            <img src="${event.image}" alt="${event.name}">
        `;

        eventListContainer.appendChild(eventCard);
    });
}

// Filter events based on search input
function filterEvents() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm) ||
        event.location.toLowerCase().includes(searchTerm)
    );
    renderEvents(filteredEvents);
}

// Modal open function
function openModal(event) {
    document.getElementById('modal-title').textContent = event.name;
    document.getElementById('modal-description').textContent = event.description;
    document.getElementById('modal-image').src = event.image;
    document.getElementById('event-modal').style.display = 'flex';
}

// Modal close function
function closeModal() {
    document.getElementById('event-modal').style.display = 'none';
}

// Initialize event list on page load
window.onload = () => {
    renderEvents(events);
};
