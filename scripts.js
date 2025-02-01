// Add a função de pesquisa
function searchGoogle() {
    const query = document.getElementById("searchInput").value;
    if (query.trim() !== "") {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
    }
  }

  function luckySearch() {
    window.location.href = "https://www.google.com/doodles";
  }

  document
    .getElementById("searchButton")
    .addEventListener("click", searchGoogle);
  document
    .getElementById("luckyButton")
    .addEventListener("click", luckySearch);

  document
    .getElementById("searchInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchGoogle();
      }
    });
    