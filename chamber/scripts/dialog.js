const dialogButtons = document.querySelectorAll(".tier__button");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const tierLevel = document.getElementById("tierLevel");
const tierContainers = document.querySelectorAll(".modal__body");

dialogButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.showModal();

    const filter = button.getAttribute("data-tier");
    tierContainers.forEach((tier) => {
      const categories = tier.getAttribute("data-modal").split(" ");

      if (categories.includes(filter)) {
        tier.classList.add("active");
      } else {
        tier.classList.remove("active");
      }
    });
  });
});

closeModal.addEventListener("click", () => {
  modal.close();
});
