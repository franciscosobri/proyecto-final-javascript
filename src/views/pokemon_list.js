import { createPokemonCard } from "../components/cards.js";
import { getPokemons } from "../services/pokemonService.js";

let currentPage = 0;
const limit = 20;
let totalPokemons = 0;

export function Pokemon_List() {
  const html = `
    <div class="container mt-4">
      <h2>Pokédex Nacional</h2>
      <div id="pokemon-container" class="d-flex flex-wrap justify-content-center"></div>
      <div class="d-flex justify-content-between align-items-center mt-3">
        <div>
          <button id="first-btn" class="btn btn-warning">Inicio</button>
          <button id="prev-btn" class="btn btn-primary">Anterior</button>
        </div>
        <span id="page-info"></span>
        <div>
          <button id="next-btn" class="btn btn-primary">Siguiente</button>
          <button id="last-btn" class="btn btn-warning">Final</button>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const container = document.getElementById("pokemon-container");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const firstBtn = document.getElementById("first-btn");
    const lastBtn = document.getElementById("last-btn");
    const pageInfo = document.getElementById("page-info");

    async function loadPage(page) {
      container.innerHTML = "";
      const offset = page * limit;
      const { pokemons, total } = await getPokemons(limit, offset);
      totalPokemons = total;

      pokemons.forEach(pokemon => {
        const card = createPokemonCard(pokemon);
        container.appendChild(card);
      });

      prevBtn.disabled = page === 0;
      firstBtn.disabled = page === 0;
      const totalPages = Math.ceil(totalPokemons / limit);
      nextBtn.disabled = page >= totalPages - 1;
      lastBtn.disabled = page >= totalPages - 1;
      pageInfo.textContent = `Página ${page + 1} de ${totalPages}`;
    }

    prevBtn.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        loadPage(currentPage);
      }
    });

    nextBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(totalPokemons / limit);
      if (currentPage < totalPages - 1) {
        currentPage++;
        loadPage(currentPage);
      }
    });

    firstBtn.addEventListener("click", () => {
      currentPage = 0;
      loadPage(currentPage);
    });

    lastBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(totalPokemons / limit);
      currentPage = totalPages - 1;
      loadPage(currentPage);
    });

    loadPage(currentPage);
  }, 0);
  
  //Sin paginado.
  
  //     pokemons.forEach(pokemon => {
  //       const card = createPokemonCard(pokemon);
  //       container.appendChild(card);
  //     });
  //   }, 0);

  return html;
}


