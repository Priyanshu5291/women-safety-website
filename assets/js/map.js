function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
    });

    const incidents = JSON.parse(localStorage.getItem('incidents')) || [];
    incidents.forEach((incident) => {
        const marker = new google.maps.Marker({
            position: { lat: 37.7749, lng: -122.4194 }, // Replace with actual lat/lng in a real scenario
            map: map,
            title: incident.type,
        });
    });
}
