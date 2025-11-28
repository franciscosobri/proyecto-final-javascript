export function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('card', 'm-2');
  card.style.width = '12rem';

  card.innerHTML = `
    <img src="${pokemon.image}" class="card-img-top" alt="${pokemon.name}">
    <div class="card-body text-center">
      <h5 class="card-title">${pokemon.name}</h5>
      <a href="#/pokemon/${pokemon.id}" class="btn btn-primary">Ver más</a>
    </div>
  `;

  return card;
}
