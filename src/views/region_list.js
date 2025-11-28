import { createPokemonCard } from "../components/cards.js";
import { getPokemonsByRegion } from "../services/regionService.js";

export function Region_List(regionName) {
  const html = `
    <div class="container mt-4">
      <h2>Pokédex de ${regionName.charAt(0).toUpperCase() + regionName.slice(1)}</h2>
      <div id="region-container" class="d-flex flex-wrap justify-content-center"></div>
    </div>
  `;

  setTimeout(async () => {
    const container = document.getElementById("region-container");
    const pokemons = await getPokemonsByRegion(regionName);

    pokemons.forEach(pokemon => {
      const card = createPokemonCard(pokemon);
      container.appendChild(card);
    });
  }, 0);

  return html;
}
