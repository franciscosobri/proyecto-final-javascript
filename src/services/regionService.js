// asigno el nombre de la api por conflictos de repeticion.
const regionMap = {
  kanto: "kanto",
  johto: "updated-johto"
};

export async function getPokemonsByRegion(region) {
  const apiRegion = regionMap[region];
  const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${apiRegion}`);
  const data = await response.json();

  const detailedData = await Promise.all(
    data.pokemon_entries.map(async (entry) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}`);
      const info = await res.json();
      
      return {
        id: info.id,
        name: info.name,
        image: info.sprites.other['official-artwork'].front_default
      };
    })
  );

  return detailedData;
}
