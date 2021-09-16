const baseURL = 'https://pokeapi.co/api/v2/';
let url;

// POKEMON DATA
const pokeName = document.querySelector('.poke-name');
const pokeImage = document.querySelector('.image');
const pokeExp = document.querySelector('.base-exp');
const pokeHeight = document.querySelector('.height');
const pokeWeight = document.querySelector('.Weight');

// BUTTONS
const submitBtn = document.querySelector('.submit');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

submitBtn.addEventListener('submit', fetchResults);
// prevBtn.addEventListener('click', prevPage);
// nextBtn.addEventListener('click', nextPage);

prevBtn.style.display = 'none';
nextBtn.style.display = 'none';

function fetchResults(e){
    console.log(e);
    e.preventDefault();

    url = baseURL;
    console.log('URL:', url);

    fetch(url)
       .then(results)
}