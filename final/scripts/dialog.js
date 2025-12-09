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
