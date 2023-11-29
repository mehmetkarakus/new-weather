document.addEventListener("DOMContentLoaded", async () => {
 
  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");

  var resultsContainer = document.createElement("div");
  resultsContainer.classList.add("results-container");
  searchResults.appendChild(resultsContainer);

  searchInput.addEventListener("input", function () {
    performSearch();
  });

  async function performSearch() {
    var searchTerm = searchInput.value.toLocaleLowerCase("TR");

    if (searchTerm === "") {
      searchResults.style.display = "none";
      return;
    }

    const response = await fetch("./component/city.json");
    const items = await response.json();

    displayResults(searchTerm, items);
  }

  function displayResults(searchTerm, items) {
    var filteredItems = items.filter(function (item) {
      return item.toLocaleLowerCase("TR").includes(searchTerm);
    });

    renderResults(filteredItems);
  }

  function renderResults(results) {
    resultsContainer.innerHTML = "";

    results.forEach(function (result) {
      var li = document.createElement("li");
      li.textContent = result;

      li.addEventListener("click", function () {
        searchInput.value = result;
      });

      li.addEventListener("click", function () {
        searchResults.style.display = "none";
      });

      resultsContainer.appendChild(li);
    });

    searchResults.style.display = "block";

    
  }
  
});