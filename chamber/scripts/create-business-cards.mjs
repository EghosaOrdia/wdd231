const resultsContainer = document.querySelector(".results");

const fetchData = async () => {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
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

  let category;
  if (business.membershipLevel == 1) {
    category = "Bronze";
  } else if (business.membershipLevel == 2) {
    category = "Silver";
  } else if (business.membershipLevel == 3) {
    category = "Gold";
  }

  businessTitle.textContent = `${business.name} - ${category}`;

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

const createAllCards = async () => {
  businesses = await fetchData();
};

const createRandomPremium = async (count) => {
  businesses = await fetchData();
  const premiumBusinesses = businesses.filter(
    (business) => business.membershipLevel > 1
  );

  const shuffled = [...premiumBusinesses].sort(() => Math.random() - 0.5);
  const randomBusinesses = shuffled.slice(0, count);

  randomBusinesses.forEach((business) => createBusinessCard(business));
};

const main = async (count = "all") => {
  businesses = await fetchData();
  if (count === "all") {
    businesses.forEach((business) => {
      createBusinessCard(business);
    });
  } else {
    for (let i = 0; i < Number(count); i++) {
      createBusinessCard(businesses[i]);
    }
  }
};

export { createAllCards, createRandomPremium };
export default main;
