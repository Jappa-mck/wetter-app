const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');
const weatherDetails = document.getElementById('weather-details');
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('country-name');
const temperatureValue = document.getElementById('temperature-value');
const apparentTemperatureValue = document.getElementById('apparent-temperature-value');
const temperatureRangeValue = document.getElementById('temperature-range-value');
const precipitationProbabilityValue = document.getElementById('precipitation-probability-value');

const lastCity = localStorage.getItem('lastCity');

if (lastCity) {
    cityInput.value = lastCity;
} 

weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    weatherDetails.hidden = true;
    const city = cityInput.value.trim();

    if (!city || city === '') {
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
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`);

        if (!weatherResponse.ok) {
                throw new Error(`HTTP error! status: ${weatherResponse.status}`);
        }


        const weatherData = await weatherResponse.json();

        weatherDetails.hidden = false;
        weatherResult.textContent = '';
        
        cityName.textContent = `${place.name},`;
        countryName.textContent = `${place.country}`;

        temperatureValue.textContent = `${weatherData.current.temperature_2m} °C`;
        apparentTemperatureValue.textContent = `${weatherData.current.apparent_temperature} °C`;
        temperatureRangeValue.textContent = `${weatherData.daily.temperature_2m_max[0]} °C / ${weatherData.daily.temperature_2m_min[0]} °C`;
        precipitationProbabilityValue.textContent = `${weatherData.daily.precipitation_probability_max[0]}%`;

        localStorage.setItem('lastCity', place.name);
    
    } catch (error) {
        console.error('Fehler beim Abrufen der Wetterdaten:', error);
        weatherResult.textContent = 'Es gab einen Fehler beim Abrufen der Wetterdaten. Bitte versuche es später erneut.';
    }
});     

weatherResult.textContent = `Bitte gib einen Stadtnamen ein, um das Wetter anzuzeigen.`;