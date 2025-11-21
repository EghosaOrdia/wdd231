const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const tabBtns = document.querySelectorAll(".tab-btn");
const courseCards = document.querySelectorAll(".course-card");
const creditsTotal = document.getElementById("creditsTotal");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

const sumCredits = function () {
  const visibleCards = [...courseCards].filter(
    (card) => !card.classList.contains("hidden")
  );

  const creditsSum = visibleCards.reduce(
    (sum, card) => sum + Number(card.dataset.credit),
    0
  );

  creditsTotal.textContent = creditsSum;
};

sumCredits();

tabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    courseCards.forEach((card) => {
      const categories = card.getAttribute("data-category").split(" ");

      if (categories.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });

    sumCredits();
  });
});

const modal = document.getElementById("modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", function () {
  modal.close();
});
