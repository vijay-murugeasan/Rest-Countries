# Project Refrence - Frontend Mentor - REST Countries API 

## Overview

### Links


- Live Site URL:[https://rest-countries-two-drab.vercel.app/](https://rest-countries-two-drab.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

While making this project, the most important thing which I learned is the fetch API which is also the foundation of this website.

One other thing which I also learned is the local storage which I used for saving the user preference for theme (light/dark).

Here is the snippet of the fetch API I used in this project
```js
fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    countries = data;
    countries.forEach((country) => {
      main.innerHTML += `<div class="country"><div class="flag-container"><img class="flag" src=${country.flag}></div><div class="country-details"><h2 class="country-name">${country.name}</h2><span><strong>Population: </strong>${country.population}</span><br><span><strong>Region: </strong>${country.region}</span><br><span><strong>Capital: </strong>${country.capital}</span></div></div>`;
    });
  });
```
