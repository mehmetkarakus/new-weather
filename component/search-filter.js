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

// Şehir adına göre filtreleme yapan fonksiyon
async function filterCities(searchTerm) {
    const cityData = await getCityData();
    const filteredCities = cityData.filter(city => city.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredCities;
}

// Arama input'una girilen değeri alıp şehirleri filtreleme ve sonuçları gösterme
async function searchCity(event) {
    if (event.key === 'Enter') {
        // Enter tuşuna basıldığında çalıştır
        const searchInput = document.getElementById('searchInput');
        const resultContainer = document.getElementById('resultContainer');

        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            const filteredCities = await filterCities(searchTerm);

            // Sonuçları ekrana yazdırma
            resultContainer.innerHTML = '';
            filteredCities.forEach(city => {
                const cityElement = document.createElement('div');
                cityElement.textContent = city.name;
                resultContainer.appendChild(cityElement);
            });
        } else {
            // Eğer boş bir değer girilirse, sonuçları temizle
            resultContainer.innerHTML = '';
        }
    }
}
