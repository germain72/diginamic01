var $modal = document.getElementById("myModal");
var $inputSearch = document.getElementById("search-in");
var $btnSearch = document.getElementById("search-btn");
var $btnModalClose = document.getElementById("modal-close-btn");
var $crossModalClose = document.getElementById("modal-close-cross");

// Verification Input recherche
var valideRecherche = function () {
  $inputSearch.value === "" ? alertToggle() : console.log($inputSearch.value);
};
// Modal
var alertToggle = function () {
  $modal.style.display === "block"
    ? ($modal.style.display = "none")
    : ($modal.style.display = "block");
};

$btnSearch.addEventListener("click", valideRecherche);

// Fermeture de la modal
$crossModalClose.addEventListener("click", alertToggle);
$btnModalClose.addEventListener("click", alertToggle);
