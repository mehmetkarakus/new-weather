const jsonFilePath = 'json/city.json';

// JSON dosyasından veriyi çeken fonksiyon
async function getCityData() {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function filterCities(searchTerm) {
    const cityData = await getCityData();
    const filteredCities = cityData.filter(city => city.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredCities;
}

async function searchCity(event) {
    if (event.key === 'Enter') {

        const searchInput = document.getElementById('searchInput');
        const resultContainer = document.getElementById('resultContainer');

        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            const filteredCities = await filterCities(searchTerm);

            resultContainer.innerHTML = '';
            filteredCities.forEach(city => {
                const cityElement = document.createElement('div');
                cityElement.textContent = city.name;
                resultContainer.appendChild(cityElement);
            });
        } else {
            resultContainer.innerHTML = '';
        }
    }
}
