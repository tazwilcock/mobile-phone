// Mobile Menu Closing X
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const toggleOnClick = document.getElementById("hamburgerBtn");

toggleOnClick.onclick = toggleMenu;

// Copyright Date
const rightNow = new Date();
document.querySelector("#year").textContent = rightNow.getFullYear();
