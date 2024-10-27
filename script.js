const events = [
    { id: 1, name: "Art Exhibition", date: "2024-11-10", location: "Art Gallery", description: "An amazing display of local art.", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Food Fest", date: "2024-11-15", location: "City Park", description: "Taste the best from the local chefs.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Music Concert", date: "2024-11-20", location: "Downtown Hall", description: "Enjoy live performances from top bands.", image: "https://via.placeholder.com/150" }
];

document.addEventListener("DOMContentLoaded", loadEvents);

function loadEvents() {
    const eventList = document.getElementById("event-list");
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.onclick = () => showEventDetails(event);

        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.date}</p>
            <p>${event.location}</p>
        `;
        eventList.appendChild(eventCard);
    });
}

function showEventDetails(event) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-title").innerText = event.name;
    document.getElementById("modal-description").innerText = event.description;
    document.getElementById("modal-image").src = event.image;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function filterEvents() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
    );

    const eventList = document.getElementById("event-list");
    eventList.innerHTML = "";
    filteredEvents.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.onclick = () => showEventDetails(event);

        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.date}</p>
            <p>${event.location}</p>
        `;
        eventList.appendChild(eventCard);
    });
}
