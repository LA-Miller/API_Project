const baseURL = 'https://pokeapi.co/api/v2/pokemon/40';
let url;

// CARD
const card = document.querySelector('.cards');
// POKEMON DATA
const pokeName = document.querySelector('.poke-name');
const pokeImage = document.querySelector('.image');
const pokeExp = document.querySelector('.base-exp');
const pokeHeight = document.querySelector('.height');
const pokeWeight = document.querySelector('.weight');

// POKEMON TYPES
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');

// BUTTONS
const submitBtn = document.querySelector('.submit');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

submitBtn.addEventListener('click', fetchResults);
// prevBtn.addEventListener('click', prevPage);
// nextBtn.addEventListener('click', nextPage);

prevBtn.style.display = 'none';
nextBtn.style.display = 'none';

async function fetchResults(e){
    // prevent refresh when submitBtn is clicked
    e.preventDefault();
    // console.log(e);

    const response = await fetch(baseURL);
    // console.log(response);
    const json = await response.json();
    displayPokemonNames(json);
}

let displayPokemonNames = (data) => {
    console.log('data', data);

    console.log(data.name)
    // PHYSICAL STATS
    pokeName.textContent = capitalizeFirstLetter(data.name);
    pokeExp.textContent = data.base_experience;
    pokeHeight.textContent = data.height
    pokeWeight.textContent = data.weight;

    // TYPES STATS
    const dataTypes = data.types;
    const firstType = dataTypes[0];
    console.log(firstType);
    const secondType = data.types[1];
    pokeTypeOne.textContent = capitalizeFirstLetter(dataTypes[0].type.name);
    // console.log(dataTypes);
    if(secondType != null) {
        pokeTypeTwo.textContent = capitalizeFirstLetter(secondType.type.name);
    } else {
        pokeTypeTwo.textContent = '';
    }

    if (firstType.type.name === 'grass') {
        card.style.backgroundColor= "#008000";
    } else if (firstType.type.name === 'normal') {
        card.style.backgroundColor= "#ADFF2F";
    } else if (firstType.type.name === 'fire') {
        card.style.backgroundColor= "#FF8C00";
    } else if (firstType.type.name === 'water') {
        card.style.backgroundColor= "#4682B4";
    } else if (firstType.type.name === 'electric') {
        card.style.backgroundColor= "#FFFF00";
    } else if (firstType.type.name === 'ice') {
        card.style.backgroundColor= "#00BFFF";
    } else if (firstType.type.name === 'fighting') {
        card.style.backgroundColor= "#FF0000";
    } else if (firstType.type.name === 'poison') {
        card.style.backgroundColor= "#9932CC";
    } else if (firstType.type.name === 'ground') {
        card.style.backgroundColor= "#9ACD32";
    } else if (firstType.type.name === 'flying') {
        card.style.backgroundColor= "#9370DB";
    } else if (firstType.type.name === 'psychic') {
        card.style.backgroundColor= "#DB7093";
    } else if (firstType.type.name === 'bug') {
        card.style.backgroundColor= "#32CD32";
    } else if (firstType.type.name === 'rock') {
        card.style.backgroundColor= "#6B8E23";
    } else if (firstType.type.name === 'ghost') {
        card.style.backgroundColor= "#663399";
    } else if (firstType.type.name === 'dark') {
        card.style.backgroundColor= "#696969";
    } else if (firstType.type.name === 'dragon') {
        card.style.backgroundColor= "#4B0082";
    } else if (firstType.type.name === 'steel') {
        card.style.backgroundColor= "#778899";
    } else if (firstType.type.name === 'fairy') {
        card.style.backgroundColor= "#FFB6C1";
    }


    //  IMAGE
    pokeImage.src = data.sprites.front_default;

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}