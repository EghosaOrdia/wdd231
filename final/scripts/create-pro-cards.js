const cardsContainer = document.querySelector(".explore");

const createCards = (pros) => {
  cardsContainer.innerHTML = pros
    .map(
      (pro) => `
      <div class="explore__card">
        <div class="card__heading">
          <img
            src="images/user/${pro.path}"
            alt="profile image of ${pro.name}"
            class="explore__image"
          />
          <div class="explore__info">
            <h2 class="explore__pro">${pro.name}</h2>
            <p class="explore__job section__subtext">${pro.job}</p>
          </div>
          <div class="explore__verified">
            <img
              src="images/icons/verified-check--green.svg"
              alt="verified check"
              class="category__image"
            />
            verified
          </div>
        </div>

        <div class="card__body">
          <div class="card__rating-and-review">
            <span class="star"></span>
            <span class="rating">${pro.rating}</span>
            <span class="reviews section__subtext">(${pro.reviews} reviews)</span>
            <div class="card__location section__subtext">
              ${pro.location}
            </div>
          </div>
        </div>

        <div class="card__footer">
          <div class="button explore__button">View Profile</div>
        </div>
      </div>
    `
    )
    .join("");
};

// Fetch pros data
fetch("../final/data/pros.json")
  .then((res) => res.json())
  .then((data) => {
    createCards(data);
  })
  .catch((err) => console.error("Failed to load pros.json:", err));
