const baseURL = 'https://pokeapi.co/api/v2/';
let url;

// BUTTON
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');

// RESULTS SECTION
const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);
endpoint = "pokemon?limit=100&offset=200";

async function fetchResults() {
    console.log(e);
    e.preventDefault();

    url = `${baseURL}${endpoint}`;
    console.log('URL:', url);

    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })
}

function displayResults(json) {
    console.log('Display Results', json);

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let pokemon = json.results;
    for (i = 0; i < pokemon.length; i++) {
        // console.log(pokemon[i]);

        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let img = document.createElement('img');
        let para = document.createElement('p');
        let link = document.createElement('a');
        let clearFix = document.createElement('div');

        let current = pokemon[i];
        console.log('Current:', current);

        heading.textContent = '';

        for (let j = 0; j < current.name.length; j++) {
            let span = document.createElement('span');
            span.textContent += current.name[j];

            heading.appendChild(span);
        }
        console.log(heading);

        clearFix.setAttribute('class', 'clearFix');

        article.appendChild(heading);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(link);
        article.appendChild(clearFix);
        section.appendChild(article);




    }
}







