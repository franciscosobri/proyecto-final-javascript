
const urlBase = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemonDetail(id){

    const response = await fetch(`${urlBase}/${id}`);
    const info = await response.json();

    return{
        id: info.id,
        name: info.name,
        image: info.sprites.other['official-artwork'].front_default,
        types: info.types.map(t => t.type.name),
        stats: info.stats.map(s => ({
            name: s.stat.name,
            value: s.base_stat
        }))
    }
}