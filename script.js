// =====================================
// KLASH WORLD
// Main Website JavaScript
// =====================================


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }

  });


  // Close menu when a navigation link is clicked

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

      menuBtn.textContent = "☰";

    });

  });

}


// ================================
// AUTOMATIC COPYRIGHT YEAR
// ================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}