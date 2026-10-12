const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');


weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.textContent = 'Bitte gib einen Stadtname ein.';
        return;
    }


    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=de`);
    const data = await response.json();
    const place = data.results[0];

    if (!data.results) {
        weatherResult.textContent = 'Keine Ergebnisse gefunden.';
        return;
    } 

    weatherResult.textContent = `Du suchst nach dem Wetter in ${place.name}, ${place.country}.`;

    
});

weatherResult.textContent = `Bitte gib einen Stadtnamen ein, um das Wetter anzuzeigen.`;