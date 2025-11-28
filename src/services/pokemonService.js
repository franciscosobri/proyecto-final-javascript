export async function getPokemons(limit = 20, offset = 0) {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    const pokemons = data.results;

    const detailedData = await Promise.all(
        data.results.map(async (pokemon) =>{
            const response = await fetch(pokemon.url);
            const info = await response.json();
            return{
                id: info.id,
                name: info.name,
                image: info.sprites.other['official-artwork'].front_default
            }
        })
    )
return {
    pokemons: detailedData,
    total: data.count
} ;
    
}