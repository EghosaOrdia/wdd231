// main.js (or whatever file imports the data)
import { attractions } from "../data/attractions.mjs";

const list = document.querySelector(".attractions__list");

function createAttractionCards() {
  attractions.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("attraction__item", `card${index + 1}`);

    card.innerHTML = `
      <h3 class="attraction__name">${item.name}</h3>

      <figure class="attraction__figure">
        <img 
          src="images/${item.path}" 
          alt="${item.name}" 
          class="attraction__img"
        />
      </figure>

      <address class="attraction__address">${item.address}</address>

      <p class="attraction__description">
        ${item.description}
      </p>

      <button class="button button--primary button--attraction">
        Learn More
      </button>
    `;

    list.appendChild(card);
  });
}

createAttractionCards();

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const messageBox = document.querySelector(".modal__body");

function handleVisitModal() {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  let shouldOpen = true;

  if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const diffMs = now - parseInt(lastVisit);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      messageBox.textContent = "Back so soon! Awesome!";
    } else {
      messageBox.textContent =
        diffDays === 1
          ? "You last visited 1 day ago."
          : `You last visited ${diffDays} days ago.`;
    }
  }

  if (shouldOpen) {
    modal.showModal();
  }

  localStorage.setItem("lastVisit", now.toString());
}

handleVisitModal();

closeModal.addEventListener("click", () => {
  modal.close();
});
