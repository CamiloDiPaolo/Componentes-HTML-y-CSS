const cards = ["card1", "card2", "card3", "card4", "card5"];
const cardsContainer = document.querySelector(".carrousel-items");
let actualCard = 0;

const templateCard = (label, id) => {
  return `<div class="carrousel-item"  id="card-${id}">
  <img src="./pexels-pixabay-459653.jpg" />
  <div class="info-card">
  <h3>${label}</h3>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua
  </p>
  </div>
  <div class="click-area" data-card="${id}"></div>
  </div>`;
};

// cargamos todas las tajetas
cards.forEach((cardLabel, i) => {
  cardsContainer.innerHTML += templateCard(cardLabel, i);
});

const cardsHTML = [...document.querySelectorAll(".carrousel-item")];
console.log(cardsHTML, cardsHTML.length);

// cargamos el estado inicial del carrousel
if (cardsHTML.length > 1) {
  cardsHTML[0].classList.add("center");
  cardsHTML[1]?.classList.add("rigth");
  // cardsHTML[2]?.classList.add("rigth");
}

cardsContainer.addEventListener("click", (e) => {
  const cardId = e.target.dataset.card * 1;
  // evitamos que se rompa si el usuario da muchos clicks
  if (!cardId && cardId != 0) return;

  cardsHTML.forEach((card, i) => {
    card.classList.remove("center");
    card.classList.remove("left");
    card.classList.remove("rigth");
  });

  cardsHTML[cardId]?.classList.add("center");
  cardsHTML[cardId + 1]?.classList.add("rigth");
  cardsHTML[cardId - 1]?.classList.add("left");
});
