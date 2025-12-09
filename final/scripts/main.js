const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav__links");
// const lastModified = document.getElementById("lastModified");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// lastModified.textContent = document.lastModified;
const acctTypeButtons = document.querySelectorAll(".form__button");

acctTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    acctTypeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
