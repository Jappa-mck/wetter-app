const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');


weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city === '') {
        weatherResult.textContent = 'Bitte gebe eine Stadt ein.';
        return;
    }

    weatherResult.textContent = `Du suchst nach ${city}`;
   
});

weatherResult.textContent = `Bitte geben einen Stadtnamen ein, um das Wetter anzuzeigen.`;