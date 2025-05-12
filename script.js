// Handle preference saving and retrieval
const input = document.getElementById("genre-input");
const saveBtn = document.getElementById("save-btn");
const display = document.getElementById("genre-display");

saveBtn.addEventListener("click", () => {
  const genre = input.value.trim();
  if (genre) {
    localStorage.setItem("favGenre", genre);
    display.textContent = genre;
    input.value = "";
  }
});

// Load saved preference on page load
window.addEventListener("load", () => {
  const saved = localStorage.getItem("favGenre");
  if (saved) {
    display.textContent = saved;
  }
});

// Trigger animation on button click
const animateBtn = document.getElementById("animate-btn");
const saxImg = document.getElementById("sax-img");

animateBtn.addEventListener("click", () => {
  saxImg.classList.add("animate");

  // Optional: reset animation after a delay
  setTimeout(() => {
    saxImg.classList.remove("animate");
  }, 2000);
});
