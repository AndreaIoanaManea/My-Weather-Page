 // Funcția care adaugă evenimentul de scroll și decide când să afișeze butonul
 window.addEventListener("scroll", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var halfViewportHeight = window.innerHeight / 2;

    // Dacă utilizatorul a derulat mai mult de jumătatea viewport-ului, afișează butonul
    if (window.scrollY > halfViewportHeight) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Funcția care rulează când utilizatorul face clic pe buton pentru a derula sus
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}