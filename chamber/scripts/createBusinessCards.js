const resultsContainer = document.querySelector(".results");

const fetchData = async () => {
  try {
    const response = await fetch("data/member.json");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(`Uh oh. An error has occured: ${error}`);
  }
};

const createBusinessCard = (business) => {
  const card = document.createElement("div");
  card.classList.add("result__card");
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("result__header");
  const cardDescription = document.createElement("div");
  cardDescription.classList.add("result__description");
  cardDescription.textContent = business.description;
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("result__footer");
  const cardLinks = document.createElement("div");
  cardLinks.classList.add("result__links");
  const cardActionDiv = document.createElement("div");
  cardActionDiv.classList.add("result__meta");

  const businessInfo = document.createElement("div");
  businessInfo.classList.add("result__meta");
  const businessLogo = document.createElement("img");
  businessLogo.classList.add("result__img");
  businessLogo.setAttribute("alt", "business image");
  businessLogo.setAttribute("src", `images/${business.icon}`);
  businessLogo.setAttribute("loading", "lazy");

  const businessCategory = document.createElement("span");
  businessCategory.classList.add("result__category");
  businessCategory.textContent = business.category.toUpperCase();
  const businessTitle = document.createElement("h3");
  businessTitle.classList.add("result__title");
  businessTitle.textContent = business.name;

  const emailLink = document.createElement("a");
  emailLink.setAttribute("href", "#");
  emailLink.classList.add("result__link");
  const emailIcon = document.createElement("img");
  emailIcon.setAttribute("src", "images/email.svg");
  emailIcon.setAttribute("alt", "email icon");
  emailIcon.classList.add("result__link__img");

  const webLink = document.createElement("a");
  webLink.setAttribute("href", business.url);
  webLink.classList.add("result__link");
  const webIcon = document.createElement("img");
  webIcon.setAttribute("src", "images/internet.svg");
  webIcon.setAttribute("alt", "website icon");
  webIcon.classList.add("result__link__img");

  const telLink = document.createElement("a");
  telLink.setAttribute("href", `tel:+${business.phoneNumber}`);
  telLink.classList.add("result__link");
  const telIcon = document.createElement("img");
  telIcon.setAttribute("src", "images/phone.svg");
  telIcon.setAttribute("alt", "telephone icon");
  telIcon.classList.add("result__link__img");

  const cardActionBtn = document.createElement("button");
  cardActionBtn.setAttribute("id", "resultBtn");
  cardActionBtn.classList.add("result_btn");
  cardActionBtn.textContent = "View Details";
  cardActionBtn.classList.add("result__btn");

  businessInfo.appendChild(businessCategory);
  businessInfo.appendChild(businessTitle);

  cardHeader.appendChild(businessLogo);
  cardHeader.appendChild(businessInfo);

  emailLink.appendChild(emailIcon);
  webLink.appendChild(webIcon);
  telLink.appendChild(telIcon);

  cardLinks.appendChild(emailLink);
  cardLinks.appendChild(webLink);
  cardLinks.appendChild(telLink);
  cardActionDiv.appendChild(cardActionBtn);
  cardFooter.appendChild(cardLinks);
  cardFooter.appendChild(cardActionDiv);

  card.appendChild(cardHeader);
  card.appendChild(cardDescription);
  card.appendChild(cardFooter);

  resultsContainer.appendChild(card);
};

let businesses;

const main = async () => {
  businesses = await fetchData();
  //   console.log(businesses);
  businesses.forEach((business) => {
    createBusinessCard(business);
  });
};

main();

{
  /* <div class="result__card">
  <div class="result__header">
    <img src="images/logo.png" alt="business image" class="result__img" />
    <div class="result__meta">
      <span class="result__category">TECHNOLOGY</span>
      <h3 class="result__title">Innovatech Solutions Ltd.</h3>
    </div>
  </div>
  <div class="result__description">
    Leading provider of cutting-edge software solutions and IT services
  </div>
  <div class="result__footer">
    <div class="result__links">
      <a href="#" class="result__link">
        <img
          src="images/email.svg"
          alt="email icon"
          class="result__link__img"
        />
      </a>
      <a href="#" class="result__link">
        <img
          src="images/internet.svg"
          alt="website icon"
          class="result__link__img"
        />
      </a>
      <a href="#" class="result__link">
        <img
          src="images/phone.svg"
          alt="phone icon"
          class="result__link__img"
        />
      </a>
    </div>
    <div class="result__meta">
      <button id="resultBtn" class="result__btn">
        View Details
      </button>
    </div>
  </div>
</div>; */
}
