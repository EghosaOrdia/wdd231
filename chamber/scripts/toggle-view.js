const toggleBtns = document.querySelectorAll(".view__btn");
const results = document.querySelector(".results");

const toggleImages = (hide) => {
  const businessImages = document.querySelectorAll(".result__img");
  businessImages.forEach((img) => {
    img.classList.toggle("hidden", hide);
  });
};

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    toggleBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.dataset.filter === "list") {
      results.classList.add("list");
      toggleImages(true);
    } else {
      results.classList.remove("list");
      toggleImages(false);
    }
  });
});
