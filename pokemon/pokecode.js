import { removeChildren } from '../utility/index.js'
async function getAPIData(url) {
    try {
        return fetch(url).then((data) => data.json())
    } catch (error){
        console.error(error)
    }
}

function loadPokemon(offset = 0, limit = 25) {
    removeChildren(pokeGrid)
    getAPIData(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`).then(async (data) => {
    for (const pokemon of data.results) {
        await getAPIData(pokemon.url).then((pokeData) => populatePokeCard(pokeData))
    }
})}

const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
loadButton.addEventListener('click', () => loadPokemon(800, 50))
const newButton = document.querySelector('.newPokemon')
newButton.addEventListener('click', () => {
    let pokeName = prompt('What is the name of your new Pokemon?')
    let pokeHeight = prompt('What is the height of your Pokemon?')
    let pokeWeight = prompt('What is the weight of your Pokemon?')
    let pokeAbilities = prompt('What are your pokemon abilities? (use a coma seperated list)')
    let newPokemon = new Pokemon (pokeName, pokeHeight, pokeWeight, pokeAbilities)
    console.log(newPokemon)
    populatePokeCard(newPokemon)
    
})

function populatePokeCard(singlePokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => 
        pokeCard.classList.toggle('is-flipped')
    )
    const front = populateCardFront(singlePokemon)
    const back = populateCardBack(singlePokemon)
    
    pokeCard.appendChild(front)
    pokeCard.appendChild(back)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    const pokeFront = document.createElement('figure')
    pokeFront.className = 'cardFace front'
    const pokeImg = document.createElement('img')
    pokeImg.src = '../images/pokeball.png'
    const pokeCaption = document.createElement('figcaption')
    pokeCaption.textContent = 'pokemon.name'
    pokeFront.appendChild(pokeImg)
    pokeFront.appendChild(pokeCaption)
    return pokeFront
}

function populateCardBack(pokemon) {
    const pokeBack = document.createElement('div')
    pokeBack.className = 'cardFace back'
    pokeBack.textContent = 'Back'
    const label = document.createElement('h4')
    label.textContent = 'Abilities'
    const abilityList = document.createElement('ul')
    pokemon.abilities.forEach((ability) => {
        let abilityItem = document.createElement('li')
        ability.textContent = ability.ability.name
        abilityList.appendChild(abilityItem)
    })
    pokeBack.appendChild(label)
    pokeBack.appendChild(abilityList)
    return pokeBack
}

class Pokemon {
    constructor(name, height, weight, abilities) {
        this.name = name,
        this.height = height,
        this.weight = weight,
        this.abilities = abilities
    }
}

let newPokemon = new Pokemon('Thoremon', 243, 3754)