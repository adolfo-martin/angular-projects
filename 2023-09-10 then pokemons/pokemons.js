getPokemons().then(console.log);

function getPokemons() {
    return fetch(`https://pokeapi.co/api/v2/pokemo`)
    .then((res) => {
        if (!res.ok) {
            throw new Error('Error');
        } else {
            return res.json();
        }
    }).then((data) => {
        return data.results.map((pokemon) => ({id: pokemon.url.split('/')[6], name: pokemon.name}))
    }).then(async(pokemons) => {
        // return Promise.all(pokemons.map(getPokemonById));
        const result = [];
        for (const pokemon of pokemons) {
            result.push(await getPokemonById(pokemon));
        }
        return result;
    })
    .catch((err) => {
        console.log(err);
    });
}

function getPokemonById(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`;
    return fetch(url).then((res) => {
        if (!res.ok) {
            console.log(res);
        } else {
            return res.json();
        }
    }).then((data) => {
        const { name, height, weight } = data;
        return { id: pokemon.id, name, height, weight };
    });
}