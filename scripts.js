const baseURL = "https://pokeapi.co/api/v2/pokemon/1";
let url;

// CARD
const card = document.querySelector(".cards");
// POKEMON DATA
const pokeName = document.querySelector(".poke-name");
const pokeImage = document.querySelector(".image");
const pokeExp = document.querySelector(".base-exp");
const pokeHeight = document.querySelector(".height");
const pokeWeight = document.querySelector(".weight");
const physicalStats = document.querySelector(".stats-physical");

// POKEMON TYPES
const pokeTypeOne = document.querySelector(".poke-type-one");
const pokeTypeTwo = document.querySelector(".poke-type-two");
const typeOneBorder = document.querySelector(".stats-type-one");
const typeTwoBorder = document.querySelector(".stats-type-two");

// POKEMON LIST
const pokeList = document.querySelectorAll(".list-item");

// BUTTONS
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// EVENT LISTENERS
prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener("click", nextPage);
pokeList.forEach((pokeList) => {
    pokeList.addEventListener("click", pokeListClick);
})



card.style.display = "none";

function pokeListClick(e) {
    if(!e.target) { return
    } 
    listItem = e.target;
    if(!listItem.textContent) return;

    const splitID = listItem.textContent.split('.')[0];
    fetchResults(splitID);


}
// GET DATA FOR CARD
async function fetchResults(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await response.json();
  displayPokemonNames(json);
}

let displayPokemonNames = (data) => {
  console.log("data", data);

  card.style.display = "block";

  console.log(data.name);

  // PHYSICAL STATS
  pokeName.textContent = capitalizeFirstLetter(data.name);
  pokeExp.textContent = data.base_experience;
  pokeHeight.textContent = data.height;
  pokeWeight.textContent = data.weight;

  // TYPES STATS
  const dataTypes = data.types;
  const firstType = dataTypes[0];
  console.log(firstType);
  const secondType = data.types[1];
  pokeTypeOne.textContent = capitalizeFirstLetter(dataTypes[0].type.name);
  
  if (secondType != null) {
    typeTwoBorder.style.display='flex';
    pokeTypeTwo.textContent = capitalizeFirstLetter(secondType.type.name);
  } else {
    pokeTypeTwo.textContent = "";
    typeTwoBorder.style.display = "none";
  }

  if (firstType.type.name === "grass") {
    card.style.backgroundColor = "#008000";
  } else if (firstType.type.name === "normal") {
    card.style.backgroundColor = "#ADFF2F";
  } else if (firstType.type.name === "fire") {
    card.style.backgroundColor = "#FF8C00";
  } else if (firstType.type.name === "water") {
    card.style.backgroundColor = "#4682B4";
  } else if (firstType.type.name === "electric") {
    card.style.backgroundColor = "#FFFF00";
  } else if (firstType.type.name === "ice") {
    card.style.backgroundColor = "#00BFFF";
  } else if (firstType.type.name === "fighting") {
    card.style.backgroundColor = "#FF0000";
  } else if (firstType.type.name === "poison") {
    card.style.backgroundColor = "#9932CC";
  } else if (firstType.type.name === "ground") {
    card.style.backgroundColor = "#9ACD32";
  } else if (firstType.type.name === "flying") {
    card.style.backgroundColor = "#9370DB";
  } else if (firstType.type.name === "psychic") {
    card.style.backgroundColor = "#DB7093";
  } else if (firstType.type.name === "bug") {
    card.style.backgroundColor = "#32CD32";
  } else if (firstType.type.name === "rock") {
    card.style.backgroundColor = "#6B8E23";
  } else if (firstType.type.name === "ghost") {
    card.style.backgroundColor = "#663399";
  } else if (firstType.type.name === "dark") {
    card.style.backgroundColor = "#696969";
  } else if (firstType.type.name === "dragon") {
    card.style.backgroundColor = "#4B0082";
  } else if (firstType.type.name === "steel") {
    card.style.backgroundColor = "#778899";
  } else if (firstType.type.name === "fairy") {
    card.style.backgroundColor = "#FFB6C1";
  }

  //  IMAGE
  pokeImage.src = data.sprites.front_default;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let offset = 0;

// GET DATA FOR POKELIST
const fetchPokeList = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
      const results = data.results;
      nextUrl = data.next;
      
      prevUrl = data.previous;
      console.log(prevUrl);
      if(!prevUrl) {
          prevBtn.style.display='none';
      } else {
          prevBtn.style.display='inline-flex'
      }

      if(!nextUrl) {
          nextBtn.style.display='none';
      } else {
          nextBtn.style.display='inline-flex';
      }

      for (let i = 0; i < pokeList.length; i++) {
        const pokeListItem = pokeList[i];
        const resultData = results[i];

        if (resultData) {
          const { name, url } = resultData;
          const urlSplit = url.split("/");
          const id = urlSplit[urlSplit.length - 2];
          
          pokeListItem.textContent = id + ". " + capitalizeFirstLetter(name);
        } else {
          pokeList.textContent = "";
        }
      }
    });
};

function nextPage(e) {
    e.preventDefault();
  if (nextUrl) {
    fetchPokeList(nextUrl);
  }
}

function prevPage(e) {
    e.preventDefault();
  if (prevUrl) {
    fetchPokeList(prevUrl);
  }
}

// INITIALIZE APP
fetchPokeList("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
