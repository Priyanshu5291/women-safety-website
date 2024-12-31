document.addEventListener("DOMContentLoaded", () => {
    const incidents = JSON.parse(localStorage.getItem('incidents')) || [];
    const safetyScore = Math.max(100 - incidents.length * 10, 0);

    document.getElementById('safetyScore').innerText = `Safety Score: ${safetyScore}`;
});
