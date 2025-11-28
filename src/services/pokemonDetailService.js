
const urlBase = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemonDetail(id){

    try{
        const response = await fetch(`${urlBase}/${id}`);
        
        if(!response.ok){
            throw new Error('No se pudo obtener el Pokémon');
        }

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
    catch(error){
        console.error("Error en getPokemonDetail")

        return {
            id,
            name: "Desconodido",
            image: "",
            types: [],
            stats: []
        }
    }

}