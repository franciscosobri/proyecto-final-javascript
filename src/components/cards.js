export function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('card', 'm-2');
  card.style.width = '12rem';

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isFavorite = favorites.includes(pokemon.id);

  card.innerHTML = `
    <img src="${pokemon.image}" class="card-img-top" alt="${pokemon.name}">
    <div class="card-body text-center">
      <h5 class="card-title text-capitalize">${pokemon.name}</h5>
      <a href="#/pokemon/${pokemon.id}" class="btn btn-primary mb-2">Ver más</a>
      <button class="btn btn-light favorite-btn">
        ${isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  `;


   const favBtn = card.querySelector(".favorite-btn");
  favBtn.addEventListener("click", () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(pokemon.id)) {
      favorites = favorites.filter(id => id !== pokemon.id);
      favBtn.innerHTML = "🤍";
    } else {
      favorites.push(pokemon.id);
      favBtn.innerHTML = "❤️";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  return card;
}
