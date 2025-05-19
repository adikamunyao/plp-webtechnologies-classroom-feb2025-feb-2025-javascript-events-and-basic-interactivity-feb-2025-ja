const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const saveColorBtn = document.getElementById("saveColorBtn");

// Function: Trigger animation
animateBtn.addEventListener("click", () => {
  box.classList.add("animate");

  // Remove class after animation ends so it can replay
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
});

// Function: Save user color preference to localStorage
saveColorBtn.addEventListener("click", () => {
  const color = prompt("Enter your favorite box color (e.g. blue, green, #f06):");
  if (color) {
    localStorage.setItem("boxColor", color);
    box.style.backgroundColor = color;
  }
});

// On load: Apply saved color from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("boxColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
  }
});
