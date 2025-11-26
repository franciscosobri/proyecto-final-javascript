
export const getPokemons = async (limit = 50) => {

    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = await res.json();

        const fullData = await Promise.all(data.results.map(async (p) => {
            const detailRes = await fetch(p.url);
            return await detailRes.json();
        }));
        return fullData;
    }
    catch(error){
        console.error("Error al cargar Pokémon", error);
        return[];
    }
} 
    
