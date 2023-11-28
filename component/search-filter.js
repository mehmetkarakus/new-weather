document.addEventListener("DOMContentLoaded", () => {
    var searchInput = document.getElementById('searchInput');

    var searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function () {
        performSearch();
    });

    function performSearch() {
        var searchTerm = searchInput.value.toLowerCase();

        if (searchTerm === '') {
            searchResults.style.display = 'none';
            return;
        }
        displayResults(searchTerm);
    }

    function displayResults(searchTerm) {
       var items = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin","Burdur","Bolu","Bitlis","Bingöl","Bilecik","Balıkesir","Aydın",
        "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Elazığ", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", 
        "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", 
        "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", 
        "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", 
        "Düzce"];

        var filteredItems = items.filter(function (item) {
            return item.toLowerCase().includes(searchTerm);
        });

        renderResults(filteredItems);
    }

    function renderResults(results) {
        searchResults.innerHTML = '';

        results.forEach(function (result) {
            var li = document.createElement('li');
            li.textContent = result;
            
            li.addEventListener('mouseover', function () {
                searchInput.value = result;
            });

            li.addEventListener('click', function () {
                searchResults.style.display = 'none';
            });

            searchResults.appendChild(li);
        });

        searchResults.style.display = 'block';
    }
})