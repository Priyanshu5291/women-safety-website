document.getElementById('reportForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const incident = {
        type: document.getElementById('type').value,
        location: document.getElementById('location').value,
        description: document.getElementById('description').value,
        time: new Date().toLocaleString(),
    };

    let incidents = JSON.parse(localStorage.getItem('incidents')) || [];
    incidents.push(incident);
    localStorage.setItem('incidents', JSON.stringify(incidents));

    alert('Incident reported successfully!');
    location.reload();
});
