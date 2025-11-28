
import { getPokemonDetail } from "../services/pokemonDetailService.js";

export function Pokemon_Detail(id) {
  const html = `
    <div class="container mt-4">
      <div id="pokemon-detail" class="text-center"></div>
    </div>
  `;

  setTimeout(async () => {
    const container = document.getElementById("pokemon-detail");
    const pokemon = await getPokemonDetail(id);

    container.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}" class="img-fluid mb-3" style="max-width:200px;">
      <h2>${pokemon.name}</h2>
      <h4>Tipos</h4>
      <p>${pokemon.types.join(", ")}</p>
      <h4>Estadísticas</h4>
      <ul class="list-group">
        ${pokemon.stats.map(stat => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${stat.name}
            <span class="badge bg-primary rounded-pill">${stat.value}</span>
          </li>
        `).join("")}
      </ul>
      <br></br>
      <a href="#/lista-pokemon"><button class="btn-primary">Volver</button></a>
    `;
  }, 0);

  return html;
}
