const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');


weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.textContent = 'Bitte gib einen Stadtnamen ein.';
        return;
    }

    weatherResult.textContent = 'Wetterdaten werden abgerufen...';

    try {

        const geocodingResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=de`);

        if (!geocodingResponse.ok) {
            throw new Error(`HTTP error! status: ${geocodingResponse.status}`);
        }

        const data = await geocodingResponse.json();

        if (!data.results) {
            weatherResult.textContent = `Keine Stadt namens ${city} gefunden. Bitte versuche es erneut.`;
            return; 
        }

        const place = data.results[0];

        
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m`);

        if (!weatherResponse.ok) {
                throw new Error(`HTTP error! status: ${weatherResponse.status}`);
        }

        const weatherData = await weatherResponse.json();
        weatherResult.textContent = `In ${place.name} sind es aktuell ${weatherData.current.temperature_2m} °C.`;

    } catch (error) {
        console.error('Fehler beim Abrufen der Wetterdaten:', error);
        weatherResult.textContent = 'Es gab einen Fehler beim Abrufen der Wetterdaten. Bitte versuche es später erneut.';
    }
});

weatherResult.textContent = `Bitte gib einen Stadtnamen ein, um das Wetter anzuzeigen.`;