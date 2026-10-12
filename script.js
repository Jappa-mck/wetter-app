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
    

    if (!data.results) {
        weatherResult.textContent = 'Keine Ergebnisse gefunden.';
        return;
    } 

    const place = data.results[0];
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m`);
    const weatherData = await weatherResponse.json();

    console.log(weatherData);

    weatherResult.textContent = `In ${place.name} sind es aktuelle ${weatherData.current.temperature_2m} °C.`;

});

weatherResult.textContent = `Bitte gib einen Stadtnamen ein, um das Wetter anzuzeigen.`;