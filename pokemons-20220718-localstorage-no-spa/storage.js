export function storePokemonInCardsdesk(name, url) {
    const cardsdesk = getCardsdesk()
    cardsdesk.push({ name, url })
    window.localStorage.setItem('pokemonCardsdesk', JSON.stringify(cardsdesk))
}


export function getCardsdesk() {
    const cardsdeskRaw = window.localStorage.getItem('pokemonCardsdesk');
    if (!cardsdeskRaw)
        return []
    else 
        return JSON.parse(cardsdeskRaw)
    
}