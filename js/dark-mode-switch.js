// Logic for switching between dark and light mode

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
