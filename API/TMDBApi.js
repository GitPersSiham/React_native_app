// API/TMDBApi.js

const API_TOKEN = "8151c5d9b9198f136a5e3735f875e3b3";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }


  export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }